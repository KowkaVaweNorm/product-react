import { type Mods, classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Avatar.module.scss';
import { useMemo } from 'react';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { AppImage } from '../../redesigned/AppImage';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar = (props: AvatarProps): JSX.Element => {
  const { className = '', src, alt, fallbackInverted, size = 100 } = props;
  const styles = useMemo<React.CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const mods: Mods = {};
  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = (
    <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />
  );
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
