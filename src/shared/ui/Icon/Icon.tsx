import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type SVGProps, memo } from 'react';

interface IconProps {
  className?: string
  Svg?: React.FC<SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon = memo((props: IconProps): JSX.Element => {
  const {
    className,
    Svg,
    inverted
  } = props;

  if (Svg == null) return <></>;

  return (
      <Svg className={classNames((inverted ?? false) ? cls.inverted : cls.Icon, {}, [className])}>
      </Svg>
  );
});
