import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s ?? 's',
  m: cls.size_m ?? 'm',
  l: cls.size_l ?? 'l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text = '',
    title = '',
    variant = 'primary',
    align = 'left',
    size = 'm',
    bold,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const additionalClasses = [className, cls[variant], cls[align], sizeClass];

  return (
    <div className={classNames(cls.Text, { [cls.bold ?? 'bold']: bold }, additionalClasses)}>
      {Boolean(title) && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {Boolean(text) && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
});
