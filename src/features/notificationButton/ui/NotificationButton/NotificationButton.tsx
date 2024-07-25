import React, { memo } from 'react';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './NotificationButton.module.scss';
import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
      <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          direction="bottom left"
          trigger={(
              <Button theme={ButtonTheme.CLEAR}>
                  <Icon Svg={NotificationIcon} inverted />
              </Button>
            )}
        >
          <NotificationList className={cls.notifications} />
      </Popover>
  );
});
