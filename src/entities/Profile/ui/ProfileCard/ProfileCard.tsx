import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
      <div
          className={ classNames(cls.ProfileCard ?? '', {}, [className])}
			>
          <div className={cls.header}>
              <Text
                  title={t('Профиль')}
							/>
              <Button
                  theme={ButtonTheme.OUTLINE}
							>
                  {t('Редактировать')}
              </Button>
          </div>
          <div className={cls.data}>
              <Input
                  value={data?.first}
                  placeholder={t('Ваше Имя')}
                  className={cls.input}
                  />
              <Input
                  value={data?.lastname}
                  placeholder={t('Ваше фамилия')}
                  className={cls.input}
						/>
          </div>
      </div>
  );
};
