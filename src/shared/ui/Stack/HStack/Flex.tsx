
import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import cls from "./Flex.module.scss";

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'
const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart ?? '',
  center: cls.justifyCenter ?? '',
  end: cls.justifyEnd ?? '',
  between: cls.justifyBetween ?? ''
};
const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart ?? '',
  center: cls.alignCenter ?? '',
  end: cls.alignEnd ?? ''
};
const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow ?? '',
  column: cls.directionColumn ?? ''
};
const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4 ?? '',
  8: cls.gap8 ?? '',
  16: cls.gap16 ?? '',
  32: cls.gap32 ?? ''
};

interface FlexProps {
  className?: string
  children?: React.ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
}

export const Flex = (props: FlexProps): JSX.Element => {
  const {
    direction = 'row',
    align = 'center',
    justify = 'start',
    gap,
    children,
    className = ''
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction]
  ];
  if (gap !== undefined) {
    classes.push(gapClasses[gap]);
  }

  return (
      <div className={classNames(cls.Flex, {}, classes)}>{children}</div>
  );
};
