import { useTranslation } from 'react-i18next';

const ArticlesPage = (): JSX.Element => {
  const { t } = useTranslation('article');
  return (
      <div>
          <h2>{t('Страница статей')}</h2>
      </div>
  );
};

export default ArticlesPage;
