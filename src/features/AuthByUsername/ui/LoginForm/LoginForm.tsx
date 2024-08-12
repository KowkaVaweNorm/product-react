import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { type FormEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/Text';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoadingOverlay } from '@/shared/ui/LoadingOverlay';

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
  const onChangePaswword = useCallback(
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
          {error != null && (
            <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
          )}
          <Input
            placeholder={t('Ввод')}
            type="text"
            className={cls.input}
            value={username}
            onChange={onChangeUsername}
            autofocus={true}
          />
          <Input
            placeholder={t('Ввод')}
            type="text"
            className={cls.input}
            value={password}
            onChange={onChangePaswword}
            autofocus={false}
          />
          <Button
            type="submit"
            theme={ButtonTheme.OUTLINE}
            className={cls.loginBtn}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {t('Войти')}
          </Button>
        </form>
      </LoadingOverlay>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
