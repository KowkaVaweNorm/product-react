import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className = '' }: PageLoaderProps): JSX.Element => {
  return (
    <div className={classNames(cls.PageLoader ?? '', {}, [className])}>
      <Loader />
    </div>
  );
};
