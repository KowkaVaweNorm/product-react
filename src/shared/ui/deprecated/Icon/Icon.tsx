import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type SVGProps, memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg?: React.FC<SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo((props: IconProps): JSX.Element => {
  const { className, Svg, inverted, ...otherProps } = props;

  if (Svg == null) return <></>;

  return (
    <Svg
      className={classNames((inverted ?? false) ? cls.inverted : cls.Icon, {}, [className])}
      {...otherProps}
    ></Svg>
  );
});
