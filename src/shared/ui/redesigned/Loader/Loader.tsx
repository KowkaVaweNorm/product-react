import cls from './Loader.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className = '' }: LoaderProps): JSX.Element => {
  return <div className={classNames(cls.loader, {}, [className])}></div>;
};
