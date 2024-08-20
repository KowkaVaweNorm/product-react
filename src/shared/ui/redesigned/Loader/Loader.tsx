import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className = '' }: LoaderProps): JSX.Element => {
  return <div className={classNames(cls.loader, {}, [className])}></div>;
};
