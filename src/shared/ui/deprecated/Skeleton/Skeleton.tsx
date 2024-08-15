import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Skeleton.module.scss';
import { type CSSProperties, memo } from 'react';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps): JSX.Element => {
  const { border, className = '', height, width } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={classNames(cls.skeleton ?? '', {}, [className])} style={styles} />;
});
