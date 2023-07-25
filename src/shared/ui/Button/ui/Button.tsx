import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    theme = '',
    square = false,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme] ?? '']: true,
    [cls.square ?? '']: square,
    [cls[size] ?? '']: true,
    [cls.disabled ?? '']: disabled
  };

  return (
      <button
          className={classNames(cls.Button ?? '', mods, [className, theme])}
          disabled={disabled}
          {...otherProps}
    >
      </button>
  );
};
