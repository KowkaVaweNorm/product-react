import { Menu } from '@headlessui/react';
import { Fragment, type ReactNode } from 'react';
import { type DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';

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

export function Dropdown (props: DropdownProps) {
  const {
    className, trigger, items, direction = 'bottom right'
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
      <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
          <Menu.Button className={popupCls.trigger}>
              {trigger}
          </Menu.Button>
          <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
              {items.map((item) => {
                const content = ({ active }: { active: boolean }) => (
                    <button
                        type="button"
                        disabled={item.disabled}
                        onClick={item.onClick}
                        className={classNames(cls.item, { [popupCls.active ?? '']: active })}
                        >
                        {item.content}
                    </button>
                );

                if (item.href) {
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
