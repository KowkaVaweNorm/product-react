import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, ProfileReducer, fetchProfileData } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: ProfileReducer
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div
      >
              <ProfileCard />
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;
