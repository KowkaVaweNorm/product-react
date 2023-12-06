import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ProfilePageHeader.module.scss';
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
      <div
          className={
            classNames(cls.ProfilePageHeader ?? '', {}, [className])
        }
      >
          <Text
              title={t('Профиль')}
          />
          {canEdit && (
          <div className={cls.btnsWrapper}>
              { (readonly === true)
                ? <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
							>
                    {t('Редактировать')}
                </Button>
                : <>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
							>
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.saveBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
							>
                        {t('Сохранить')}
                    </Button>
                </>
            }
          </div>
          )}

      </div>
  );
};
