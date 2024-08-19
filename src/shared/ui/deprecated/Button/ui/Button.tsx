import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Button.module.scss';
import { ForwardedRef, forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  isDisabled?: boolean;
  children?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    className = '',
    theme = '',
    square = false,
    size = ButtonSize.M,
    isDisabled = false,
    fullWidth = false,
    isLoading,
    children,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme] ?? '']: true,
    [cls.square ?? '']: square,
    [cls[size] ?? '']: true,
    [cls.disabled ?? '']: isDisabled,
    [cls.fullWidth ?? '']: fullWidth,
  };
  return (
    <button
      className={classNames(cls.Button ?? '', mods, [className, theme])}
      disabled={isDisabled || isLoading}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      ref={ref}
    >
      {children}
    </button>
  );
});
