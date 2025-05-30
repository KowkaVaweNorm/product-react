import cls from './ErrorImage.module.scss';
import { Icon } from '../../Icon';

import NoImage from '@/shared/assets/icons/no-image-2.svg';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';

// TODO: Понять нужен ли данный компонент в проекте
export const ErrorImage = ({ className, ...props }: any): JSX.Element => {
  return <Icon {...props} className={classNames(cls.img, {}, [className])} Svg={NoImage} />;
};
