import { Fragment, type ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button';
import { HStack } from '../../../Stack';

export interface ListBoxItem<ValueType> {
  value: ValueType;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<ValueType> {
  items?: Array<ListBoxItem<ValueType>>;
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft ?? 'oB',
  'bottom right': cls.optionsBottomRight ?? 'oB',
  'top left': cls.optionsTopLeft ?? 'oT',
  'top right': cls.optionsTopRight ?? 'oT',
};

export function ListBox<ValueType extends string>(props: ListBoxProps<ValueType>): JSX.Element {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly = false,
    direction = 'bottom left',
    label,
  } = props;

  const optionsClasses: string[] = [mapDirectionClass[direction]];
  // TODO: Убрать вложенность button in button
  return (
    <HStack gap="4">
      {label !== undefined && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.active ?? 'a']: active,
                    [cls.disabled ?? 'd']: item.disabled,
                  })}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
