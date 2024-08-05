import { type Mods, classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { type Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { type Currency, CurrencySelect } from '@/entities/Currency';
import { type Country } from '@/entities/Country';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');
  if (isLoading ?? false) {
    return (
        <HStack
            justify='center'
            max
            className={
                classNames(cls.ProfileCard ?? '', { [cls.loading ?? '']: true }, [className])}>
            <Loader />
        </HStack>
    );
  }
  if (error != null) {
    return (
        <HStack
            justify='center'
            max
            className={
                classNames(cls.ProfileCard ?? '', { }, [className, cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER} />
        </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing ?? '']: readonly === false
  };
  return (
      <VStack
          gap='8'
          max
          className={ classNames(cls.ProfileCard ?? '', mods, [className])}
			>
          { ((data?.avatar) != null) && (
              <HStack
                  justify='center'
                  max
                  className={cls.avatarWrapper}>
                  <Avatar src={data?.avatar} alt={t('Аватар пользователя')} />
              </HStack>
          )
                }
          <Input
              onChange={onChangeFirstname}
              value={data?.first}
              placeholder={t('Ваше Имя')}
              className={cls.input}
              readonly={readonly}
              data-testid="ProfileCard.firstname"
                  />
          <Input
              onChange={onChangeLastname}
              value={data?.lastname}
              placeholder={t('Ваша фамилия')}
              className={cls.input}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
						/>
          <Input
              onChange={onChangeAge}
              value={data?.age}
              placeholder={t('Ваш возраст')}
              className={cls.input}
              readonly={readonly}
						/>
          <Input
              onChange={onChangeCity}
              value={data?.city}
              placeholder={t('Ваш город')}
              className={cls.input}
              readonly={readonly}
						/>
          <Input
              onChange={onChangeUsername}
              value={data?.username}
              placeholder={t('Введите имя пользователя')}
              className={cls.input}
              readonly={readonly}
						/>
          <Input
              onChange={onChangeAvatar}
              value={data?.avatar}
              placeholder={t('Введите ссылку на аватар')}
              className={cls.input}
              readonly={readonly}
						/>
          <CurrencySelect
              className={cls.input}
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
              />
          <CountrySelect
              className={cls.input}
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
               />
      </VStack>
  );
};
