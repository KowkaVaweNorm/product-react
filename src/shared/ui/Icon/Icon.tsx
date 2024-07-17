import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type SVGProps, memo } from 'react';

interface IconProps {
  className?: string
  Svg?: React.FC<SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps): JSX.Element => {
  const {
    className,
    Svg
  } = props;

  if (Svg == null) return <></>;

  return (
      <Svg className={classNames(cls.icon ?? '', {}, [className])}>
      </Svg>
  );
});
