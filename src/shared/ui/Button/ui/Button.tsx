import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',

};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    theme = '',
    ...otherProps
  } = props

  return (
      <button
          className={classNames(cls.Button, { [cls[theme]]: true }, [className, theme])}
          {...otherProps}
    >
      </button>
  )
}
