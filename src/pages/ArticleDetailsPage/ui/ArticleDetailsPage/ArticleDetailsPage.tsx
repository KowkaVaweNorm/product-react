import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = (): JSX.Element => {
  const { t } = useTranslation('article');
  return (
      <div style={{ color: 'yellow' }}>
          <h2>{t('Страница деталей статей')}</h2>
      </div>
  );
};

export default ArticleDetailsPage;
