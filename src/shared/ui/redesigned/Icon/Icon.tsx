import React, { memo } from 'react';

import cls from './Icon.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  filled?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  classnamebutton?: string;
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
  const { className, Svg, width = 32, height = 32, clickable, filled, ...otherProps } = props;

  const icon = (
    <Svg
      className={classNames(
        cls.Icon,
        {
          [cls.filled ?? '']: filled,
        },
        [className],
      )}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined} // чтобы onClick был только на кнопке
    />
  );

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (clickable) {
    return (
      <button
        type="button"
        className={classNames(cls.button, {}, [props.classnamebutton])}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
