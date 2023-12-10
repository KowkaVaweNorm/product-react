import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileActions,
  ProfileCard,
  ProfileReducer,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileValidateErrors
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import {
  getProfileReadonly
} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { isNumber } from 'shared/lib/utils/isNumber/isNumber';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country/model/types/country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
  profile: ProfileReducer
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id !== undefined) {
      dispatch(fetchProfileData(id));
    }
  });

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

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('серверная ошибка'),
    [ValidateProfileError.NO_DATA]: t('нет данных'),
    [ValidateProfileError.UNKNOWN_ERROR]: t('Неизвестная ошибка'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Неверные данные пользователя'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Неверно указана страна'),
    [ValidateProfileError.INCORRECT_AGE]: t('Неверный возраст')
  };

  let errorsMessage = '';
  if (validateErrors !== undefined) {
    if (validateErrors.length > 0) {
      errorsMessage = validateErrors.map((err: ValidateProfileError) => (
          <Text
              theme={TextTheme.ERROR}
              key={err}
              text={validateErrorTranslates[err]}
            />
      ));
    }
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page
      >
              <ProfilePageHeader />
              {errorsMessage}
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
          </Page>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;
