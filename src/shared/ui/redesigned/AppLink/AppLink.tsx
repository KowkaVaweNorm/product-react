import { type ForwardedRef, forwardRef, type ReactNode } from 'react';
import { type LinkProps, NavLink } from 'react-router-dom';

import cls from './AppLink.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
  /**
   * children блочный элемент?
   */
  isBlock?: boolean;
}
export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName,
    isBlock,
    ...otherProps
  } = props;

  if (isBlock ?? false) {
    return (
      <div className={classNames(cls.blockWrapper, {}, [className])}>
        <NavLink
          ref={ref}
          to={to}
          className={({ isActive }) =>
            classNames(cls.AppLink, { [activeClassName ?? '']: isActive }, [
              cls[variant],
              cls.navInner,
            ])
          }
          {...otherProps}
        ></NavLink>
        {children}
      </div>
    );
  }

  // console.log('is not block:', children);

  return (
    <NavLink
      ref={ref}
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName ?? '']: isActive }, [className, cls[variant]])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
