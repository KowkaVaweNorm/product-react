import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text } from 'shared/ui/Text/Text';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Page } from 'widgets/Page';

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (id === undefined) {
    return <Text text={t('Профиль не найден')} />;
  }

  return (
      <Page className={classNames('', {}, [className])}>
          <VStack gap="16" max>
              <EditableProfileCard id={id} />
          </VStack>
      </Page>
  );
};

export default ProfilePage;
