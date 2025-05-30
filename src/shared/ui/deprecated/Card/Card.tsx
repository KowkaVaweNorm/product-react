import React, { type HTMLAttributes, memo } from 'react';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: CardTheme;
  max?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card = memo((props: ICardProps): JSX.Element => {
  const { className, children, theme = CardTheme.NORMAL, max, ...otherProps } = props;
  return (
    <div
      className={classNames(
        cls.card ?? '',
        {
          [cls.max ?? '']: max,
        },
        [className, cls[theme]],
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
});
