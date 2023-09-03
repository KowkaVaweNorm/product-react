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

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo((props: TextProps): JSX.Element => {
  const {
    className = '',
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT

  } = props;

  const mods: Mods = {
    [cls[theme] ?? '']: true,
    [cls[align] ?? '']: true
  };

  return (
      <div
          className={ classNames(cls.Text ?? '', { [cls[theme] ?? '']: true }, [className])}
      >
          {(title !== undefined) && <p className={cls.title}>{title}</p>}
          {(text !== undefined) && <p className={cls.text}>{text}</p>}
      </div>
  );
});
