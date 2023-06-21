import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { useState } from 'react'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { className = '' } = props
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onChangeUsername = (val: string): void => {
    setUsername(val)
  }
  const onChangePaswword = (val: string): void => {
    setPassword(val)
  }
  return (
      <div
          className={ classNames(cls.LoginForm ?? '', {}, [])}
      >
          <Input
              placeholder={t('Ввод')}
              type="text"
              className={cls.input}
              value={username}
              onChange={onChangeUsername}
                  />
          <Input
              placeholder={t('Ввод')}
              type="text"
              className={cls.input}
              value={password}
              onChange={onChangePaswword}
          />
          <Button
              className={cls.loginBtn}
          >
              {t('Войти')}
          </Button>
      </div>
  )
}
