import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid={'AboutPage'}>
      <h2>{t('О сайте')}</h2>
    </Page>
  );
};

export default AboutPage;
