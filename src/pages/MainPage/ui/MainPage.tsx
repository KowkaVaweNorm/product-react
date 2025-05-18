import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      <h2>{t('Главная страница')}</h2>
    </Page>
  );
};

export default MainPage;
