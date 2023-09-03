import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileActions,
  ProfileCard,
  ProfileReducer,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import {
  getProfileReadonly
} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { isNumber } from 'shared/lib/utils/isNumber/isNumber';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country/model/types/country';

const reducers: ReducersList = {
  profile: ProfileReducer
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ first: value ?? '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ lastname: value ?? '' }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ city: value ?? '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string): void => {
    if (value === undefined || !isNumber(value)) { /* empty */ } else {
      dispatch(ProfileActions.updateProfile({ age: Number(value) ?? 0 }));
    }
  }, [dispatch]);
  const onChangeUsername = useCallback((value?: string): void => {
    if (value === undefined || !isNumber(value)) { /* empty */ } else {
      dispatch(ProfileActions.updateProfile({ username: value ?? '' }));
    }
  }, [dispatch]);
  const onChangeAvatar = useCallback((value?: string): void => {
    dispatch(ProfileActions.updateProfile({ avatar: value ?? '' }));
  }, [dispatch]);
  const onChangeCurrency = useCallback((currency?: Currency): void => {
    dispatch(ProfileActions.updateProfile({ currency }));
  }, [dispatch]);
  const onChangeCountry = useCallback((country?: Country): void => {
    dispatch(ProfileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div
      >
              <ProfilePageHeader />
              <ProfileCard
                  data={formData}
                  isLoading={isLoading}
                  error={error}
                  readonly={readonly}
                  onChangeFirstname={onChangeFirstname}
                  onChangeLastname={onChangeLastname}
                  onChangeCity={onChangeCity}
                  onChangeAge={onChangeAge}
                  onChangeUsername={onChangeUsername}
                  onChangeAvatar={onChangeAvatar}
                  onChangeCurrency={onChangeCurrency}
                  onChangeCountry={onChangeCountry}
              />
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;
