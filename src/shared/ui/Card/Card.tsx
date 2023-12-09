import cls from './Card.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import React, { type HTMLAttributes, memo } from 'react';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export const Card = memo((props: ICardProps): JSX.Element => {
  const {
    className,
    children,
    ...otherProps
  } = props;
  return (
      <div
          className={classNames(cls.card ?? '', {}, [className])}
          {...otherProps}
      >{children}
      </div>
  );
});
