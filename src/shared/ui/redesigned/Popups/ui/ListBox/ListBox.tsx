import { Fragment, type ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';
import { Text } from '../../../Text';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: Array<ListBoxItem<T>>;
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly = false,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

  return (
    <HStack gap="4">
      {Boolean(label) && <Text text={label} />}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as={Button} variant="filled" addonRight={<Icon Svg={ArrowIcon} />}>
          {selectedItem?.content ?? defaultValue}
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
                    [popupCls.active ?? '']: active,
                    [popupCls.disabled ?? '']: item.disabled,
                    [popupCls.selected ?? '']: selected,
                  })}
                >
                  {selected}
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
