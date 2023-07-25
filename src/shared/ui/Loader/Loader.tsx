import { classNames } from 'shared/lib/ClassNames/ClassNames';
import './Loader.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className = '' }: LoaderProps): JSX.Element => {
  return (
      <div className={classNames('lds-spinner', {}, [className])}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  );
};
