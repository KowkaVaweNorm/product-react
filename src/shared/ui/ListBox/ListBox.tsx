import { Fragment, type ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';
import { Button } from '../Button';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { type DropdownDirection } from 'shared/types/ui';

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom left": cls.optionsBottomLeft ?? 'oB',
  "bottom right": cls.optionsBottomRight ?? 'oB',
  "top left": cls.optionsTopLeft ?? 'oT',
  "top right": cls.optionsTopRight ?? 'oT'
};

export function ListBox (props: ListBoxProps): JSX.Element {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly = false,
    direction = 'bottom left',
    label
  } = props;

  const optionsClasses: string[] = [mapDirectionClass[direction]];

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
                  <Button disabled={readonly}>
                      {value ?? defaultValue}
                  </Button>
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
                                  className={classNames(
                                    cls.item,
                                    {
                                      [cls.active ?? 'a']: active,
                                      [cls.disabled ?? 'd']: item.disabled
                                    }
                                  )}
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
