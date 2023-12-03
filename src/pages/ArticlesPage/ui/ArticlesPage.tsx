import { useTranslation } from 'react-i18next';

const ArticlesPage = (): JSX.Element => {
  const { t } = useTranslation('article');
  return (
      <div style={{ color: 'yellow' }}>
          <h2>{t('Страница статей')}</h2>
      </div>
  );
};

export default ArticlesPage;
