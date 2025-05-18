import { type SVGProps, memo } from 'react';

import cls from './Icon.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg?: React.FC<SVGProps<SVGSVGElement>>;
  inverted?: boolean;
  filled?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo((props: IconProps): JSX.Element => {
  const { className, Svg, inverted, filled, ...otherProps } = props;

  if (Svg == null) return <></>;

  return (
    <Svg
      className={classNames(
        (inverted ?? false) ? cls.inverted : cls.Icon,
        {
          [cls.filled ?? '']: filled,
        },
        [className],
      )}
      {...otherProps}
    ></Svg>
  );
});
