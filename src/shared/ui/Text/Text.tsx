import { type Mods, classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}
export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}
export enum TextSize {
  S = 'size_s',
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
type HeaderTag = 'h1' | 'h2' | 'h3';
const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
};

export const Text = memo((props: TextProps): JSX.Element => {
  const {
    className = '',
    title = '',
    text = '',
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [cls[theme] ?? '']: true,
    [cls[align] ?? '']: true,
    [cls[size] ?? '']: true
  };

  return (
      <div
          className={ classNames(cls.Text ?? '', mods, [className])}
      >
          {(title !== undefined) && <HeaderTag className={cls.title}>{title}</HeaderTag>}
          {(text !== undefined) && <p className={cls.text}>{text}</p>}
      </div>
  );
});
