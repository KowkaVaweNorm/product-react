import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about');
  return (
      <Page>
          <h2>
              {t('О сайте')}
          </h2>
      </Page>
  );
};

export default AboutPage;
