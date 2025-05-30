import cls from './PageLoader.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Loader } from '@/shared/ui/redesigned/Loader';

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
