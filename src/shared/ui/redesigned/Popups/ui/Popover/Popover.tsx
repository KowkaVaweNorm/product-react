import { Popover as HPopover } from '@headlessui/react';
import { type ReactNode } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, direction = 'bottom right', children } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  );
}
