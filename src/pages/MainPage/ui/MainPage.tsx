import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Page } from '@/widgets/Page';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location.search);

  return (
      <Page>
          <h2>{t('Главная страница')}</h2>
      </Page>
  );
};

export default MainPage;
