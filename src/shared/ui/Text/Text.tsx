import { type Mods, classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}
export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}
export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps): JSX.Element => {
  const {
    className = '',
    title = '',
    text = '',
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M
  } = props;

  const mods: Mods = {
    [cls[theme] ?? '']: true,
    [cls[align] ?? '']: true,
    [cls[size] ?? '']: true
  };

  return (
      <div
          className={ classNames(cls.Text ?? '', mods, [className])}
      >
          {(title !== undefined) && <p className={cls.title}>{title}</p>}
          {(text !== undefined) && <p className={cls.text}>{text}</p>}
      </div>
  );
});
