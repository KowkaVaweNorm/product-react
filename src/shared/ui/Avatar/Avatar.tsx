import { Mods, classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Avatar.module.scss';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = (props: AvatarProps): JSX.Element => {
  const {
    className = '',
    src,
    alt,
    size
  } = props;

  const { t } = useTranslation('profile');
  const styles = useMemo< React.CSSProperties>(() => {
    return {
      width: size ?? 100,
      height: size ?? 100
    };
  }, [size]);

  const mods: Mods = {};
  return (
      <img
          src={src}
          style={styles}
          alt={alt}
          className={
                classNames(cls.Avatar ?? '', mods, [])
            }
      />
  );
};
