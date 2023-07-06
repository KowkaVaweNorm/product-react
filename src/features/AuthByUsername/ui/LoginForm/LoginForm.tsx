import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import {
  loginByUsername
} from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}
export const LoginForm = memo((props: LoginFormProps): JSX.Element => {
  const { className = '' } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string): void => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])
  const onChangePaswword = useCallback((value: string): void => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])
  return (
      <div
          className={ classNames(cls.LoginForm ?? '', {}, [className])}
      >
          <Text title={t('Форма авторизации')} />
          {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
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
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
          >
              {t('Войти')}
          </Button>
      </div>
  )
})
