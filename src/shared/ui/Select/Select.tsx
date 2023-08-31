import {
  type Mods,
  classNames
} from 'shared/lib/ClassNames/ClassNames';
import cls from './Select.module.scss';
import { type ChangeEvent, memo, useMemo } from 'react';

interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectProps): JSX.Element => {
  const {
    className = '',
    label,
    onChange,
    options,
    value,
    readonly
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChange != null) {
      onChange(e.target.value);
    }
  };

  const optionList = useMemo(() => {
    return options?.map((opt, index) => (
        <option
            value={opt.value}
            key={opt.value}>
            {opt.content}
        </option>
    ));
  }, [options]);

  const mods: Mods = {};

  return (
      <div
          className={
            classNames(cls.Wrapper ?? '', mods, [className])
          }
      >
          {
            label && (
            <span className={cls.label}>
                {label + '>'}
            </span>
            )}
          <select
              disabled={readonly}
              className={cls.select}
              name=""
              id=""
              onChange={onChangeHandler}
              value={value}>
              {optionList}
          </select>
      </div>
  );
});
