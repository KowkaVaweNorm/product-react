import { type ChangeEvent, useMemo } from 'react';

import cls from './Select.module.scss';

import { type Mods, classNames } from '@/shared/lib/ClassNames/ClassNames';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: Array<SelectOption<T>>;
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}
// TODO: Исправить цвет выпадающего меню
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>): JSX.Element => {
  const { className = '', label, onChange, options, value, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChange != null) {
      onChange(e.target.value as T);
    }
  };

  const optionList = useMemo(() => {
    return options?.map((opt, index) => (
      <option className={cls.option} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Wrapper ?? '', mods, [className])}>
      {label != null && <span className={cls.label}>{label + '>'}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        name=""
        id=""
        onChange={onChangeHandler}
        value={value}
      >
        {optionList}
      </select>
    </div>
  );
};
