import { type LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type ForwardedRef, forwardRef, type ReactNode } from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;

  return (
    <NavLink
      ref={ref}
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [className, cls[variant]])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
