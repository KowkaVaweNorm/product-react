import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
      <Page data-testid='ProfilePage' className={classNames('', {}, [className])}>
          <VStack gap="16" max>
              <EditableProfileCard id={id} />
          </VStack>
      </Page>
  );
};

export default ProfilePage;
