import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileReducer } from 'entities/Profile';

const reducers: ReducersList = {
  profile: ProfileReducer
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const { className = '' } = props;
  const { t } = useTranslation();

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div
      >
              {t('PROFILE PAGE')}
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;
