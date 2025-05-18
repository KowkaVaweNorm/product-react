import { type ReactNode } from 'react';

import cls from './LoadingOverlay.module.scss';
import { Loader } from '../Loader/Loader';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

interface IProps {
  children?: ReactNode;
  loading?: boolean;
}
export const LoadingOverlay = ({ children, loading = false }: IProps): JSX.Element => {
  return (
    <div className={cls.wrap}>
      <Loader
        className={classNames(
          cls.Spinner_default,
          {
            [cls.Spinner_visible ?? '']: loading,
          },
          [],
        )}
      />
      <div className={loading ? cls.contentOverlay : ''}>{children}</div>
    </div>
  );
};
