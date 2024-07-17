import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className = '' }: PageErrorProps): JSX.Element => {
  const { t } = useTranslation();
  const reloadPage = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.reload();
  };

  return (
      <div className={classNames(cls.PageError ?? '', {}, [className])}>
          <h4>{t('Произошла ошибка')}</h4>
          <Button
              theme={ButtonTheme.OUTLINE}
              onClick={reloadPage}>
              {t('Обновить страницу')}
          </Button>
      </div>
  );
};
