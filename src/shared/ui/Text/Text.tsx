import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text = memo((props: TextProps): JSX.Element => {
  const { className = '', title, text, theme = TextTheme.PRIMARY } = props;

  return (
      <div
          className={ classNames(cls.Text ?? '', { [cls[theme] ?? '']: true }, [className])}
      >
          {(title !== undefined) && <p className={cls.title}>{title}</p>}
          {(text !== undefined) && <p className={cls.text}>{text}</p>}
      </div>
  );
});
