import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly
} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ProfileActions,
  getProfileData,
  getProfileIsLoading,
  updateProfileData
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps): JSX.Element => {
  const { className = '' } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const isLoading = useSelector(getProfileIsLoading);

  const dispatch = useAppDispatch();

  const onEdit = useCallback((): void => {
    if (isLoading === false) {
      dispatch(ProfileActions.setReadonly(false));
    }
  }, [dispatch, isLoading]);

  const onCancelEdit = useCallback((): void => {
    if (isLoading === false) {
      dispatch(ProfileActions.cancelEdit());
    }
  }, [dispatch, isLoading]);

  const onSave = useCallback((): void => {
    if (isLoading === false) {
      dispatch(updateProfileData());
    }
  }, [dispatch, isLoading]);

  return (
      <HStack
          justify='between'
          max
          className={
            classNames('', {}, [className])
        }
      >
          <Text
              title={t('Профиль')}
          />
          {canEdit && (
          <div>
              { (readonly === true)
                ? <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
							>
                    {t('Редактировать')}
                </Button>
                : <HStack gap='8' max>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
							>
                        {t('Отменить')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
							>
                        {t('Сохранить')}
                    </Button>
                </HStack>
            }
          </div>
          )}

      </HStack>
  );
};
