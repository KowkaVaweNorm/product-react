import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import { memo } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: React.ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.applink ?? '', {}, [className ?? '', cls[theme] ?? ''])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </Link>
  );
});
