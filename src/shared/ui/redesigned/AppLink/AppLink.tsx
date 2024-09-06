import { type LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type ForwardedRef, forwardRef, type ReactNode } from 'react';
import React from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}
const isBlockElement = (element: any) => {
  if (!React.isValidElement(element)) return false;
  const blockElements = [
    'address',
    'article',
    'aside',
    'blockquote',
    'canvas',
    'dd',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hr',
    'li',
    'main',
    'nav',
    'noscript',
    'ol',
    'output',
    'p',
    'pre',
    'section',
    'table',
    'tfoot',
    'ul',
    'video',
  ];

  return typeof element.type === 'string' && blockElements.includes(element.type);
};

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const { to, className, children, variant = 'primary', activeClassName, ...otherProps } = props;
  const isBlock = isBlockElement(children);

  if (isBlock) {
    return (
      <div className={cls.blockWrapper}>
        <NavLink
          ref={ref}
          to={to}
          className={({ isActive }) =>
            classNames(cls.AppLink, { [activeClassName ?? '']: isActive }, [
              className,
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
