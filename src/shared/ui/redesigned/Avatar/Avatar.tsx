import { type CSSProperties, useMemo } from 'react';

import cls from './Avatar.module.scss';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import { classNames, type Mods } from '@/shared/lib/ClassNames/ClassNames';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton className={cls.Avatar} width={size} height={size} border="50%" />;
  const errorFallback = <Icon className={cls.Avatar} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
