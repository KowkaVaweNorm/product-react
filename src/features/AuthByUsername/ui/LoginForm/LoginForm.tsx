import { type FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme as ButtonThemeDeprecated,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { LoadingOverlay } from '@/shared/ui/redesigned/LoadingOverlay';
import { Text } from '@/shared/ui/redesigned/Text';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps): JSX.Element => {
  const { className = '', onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string): void => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );
  const onChangePassword = useCallback(
    (value: string): void => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    },
    [dispatch, onSuccess, password, username],
  );
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <LoadingOverlay loading={isLoading}>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={onSubmit}
          className={classNames(cls.LoginForm ?? '', {}, [className])}
        >
          <Text title={t('Форма авторизации')} />
          {error != null && <Text text={t('Вы ввели неверный логин или пароль')} variant="error" />}
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <>
                <Input
                  autofocus
                  type="text"
                  className={cls.input}
                  placeholder={t('Введите username')}
                  onChange={onChangeUsername}
                  value={username}
                />
                <Input
                  type="text"
                  className={cls.input}
                  placeholder={t('Введите пароль')}
                  onChange={onChangePassword}
                  value={password}
                />
                <Button type="submit" className={cls.loginBtn} disabled={isLoading}>
                  {t('Войти')}
                </Button>
              </>
            }
            off={
              <>
                <InputDeprecated
                  placeholder={t('Ввод')}
                  type="text"
                  className={cls.input}
                  value={username}
                  onChange={onChangeUsername}
                  autofocus={true}
                />
                <InputDeprecated
                  placeholder={t('Ввод')}
                  type="text"
                  className={cls.input}
                  value={password}
                  onChange={onChangePassword}
                  autofocus={false}
                />
                <ButtonDeprecated
                  type="submit"
                  theme={ButtonThemeDeprecated.OUTLINE}
                  className={cls.loginBtn}
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  {t('Войти')}
                </ButtonDeprecated>
              </>
            }
          />
        </form>
      </LoadingOverlay>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
