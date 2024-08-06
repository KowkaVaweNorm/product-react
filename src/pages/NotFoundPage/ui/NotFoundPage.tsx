import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className = '' }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation();
  return (
      <div
          data-testid={'NotFoundPage'}
          className={classNames(cls.NotFoundPage ?? '', {}, [className])}>
          {t('Страница не найдена')}
      </div>
  );
};
