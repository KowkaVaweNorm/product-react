import { memo, type InputHTMLAttributes, useState, useEffect, useRef, useMemo } from 'react';

import cls from './Input.module.scss';

import { type Mods, classNames } from '@/shared/lib/ClassNames/ClassNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Input = memo((props: InputProps): JSX.Element => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder = '',
    autofocus = false,
    readonly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState('');
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);
  // Функция для получения ширины одного символа в ch
  const chWidthInPx = useMemo((): number => {
    if (inputRef.current != null) {
      const testElement = document.createElement('span');
      testElement.style.fontSize = getComputedStyle(inputRef.current).fontSize;
      testElement.style.visibility = 'hidden';
      testElement.innerText = '0';
      document.body.appendChild(testElement);
      const chWidth = testElement.getBoundingClientRect().width;
      document.body.removeChild(testElement);
      return chWidth;
    } else {
      return 10;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef.current]);
  const maxCaretPosition = useMemo(() => {
    const inputWidthInPx = inputRef.current?.getBoundingClientRect().width ?? 100;
    return Math.floor(inputWidthInPx / chWidthInPx); // максимальное количество символов в input
  }, [chWidthInPx]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange !== undefined && value !== undefined) {
      onChange(e.target.value);
    } else if (onChange !== undefined) {
      // чтобы можно было работать только с onChange
      onChange(e.target.value);
      setLocalValue(e.target.value);
    } else {
      setLocalValue(e.target.value);
    }
    if (caretRef.current != null) {
      caretRef.current.style.left = `${Math.min(e.target.selectionStart ?? Infinity, maxCaretPosition)}ch`;
    }
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };
  const onFocus = (): void => {
    setIsFocused(true);
  };
  const onSelect = (e: any): void => {
    if (caretRef.current != null) {
      const currentSelect = e.target.selectionStart ?? 0;
      caretRef.current.style.left = `${currentSelect > maxCaretPosition ? maxCaretPosition : currentSelect}ch`;
    }
  };

  const mods: Mods = {
    [cls.readonly ?? '']: readonly ?? true,
  };

  return (
    <div className={classNames(cls.InputWrapper ?? '', {}, [className])}>
      {placeholder.length > 0 && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={classNames(cls.caretWrapper, mods, [])}>
        <input
          ref={inputRef}
          type={type}
          value={value ?? localValue}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
        {isCaretVisible && <span ref={caretRef} className={cls.caret}></span>}
      </div>
    </div>
  );
});
