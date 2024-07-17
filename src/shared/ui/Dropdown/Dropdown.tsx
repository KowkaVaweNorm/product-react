import { Menu } from '@headlessui/react';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { type ReactNode, Fragment } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type DropdownDirection } from '@/shared/types/ui';

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  direction?: DropdownDirection
  trigger: ReactNode
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft ?? '',
  'bottom right': cls.optionsBottomRight ?? '',
  'top right': cls.optionsTopRight ?? '',
  'top left': cls.optionsTopLeft ?? ''
};

export function Dropdown (props: DropdownProps): JSX.Element {
  const {
    className, trigger, items, direction = 'bottom right'
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
      <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
          <Menu.Button className={cls.btn}>
              {trigger}
          </Menu.Button>
          <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
              {items.map((item) => {
                const content = ({ active }: { active: boolean }): JSX.Element => (
                    <button
                        key={item.href}
                        type="button"
                        disabled={item.disabled}
                        onClick={item.onClick}
                        className={classNames(cls.item, { [cls.active ?? '']: active })}
                        >
                        {item.content}
                    </button>
                );

                if (item.href !== undefined) {
                  return (
                      <Menu.Item
                          key={item.href}
                          as={AppLink}
                          to={item.href}
                          disabled={item.disabled}>
                          {content}
                      </Menu.Item>
                  );
                }

                return (
                    <Menu.Item
                        key={item.href}
                        as={Fragment}
                        disabled={item.disabled}>
                        {content}
                    </Menu.Item>
                );
              })}

          </Menu.Items>
      </Menu>
  );
}
