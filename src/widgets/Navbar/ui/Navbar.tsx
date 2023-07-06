/* eslint-disable i18next/no-literal-string */

import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData != null) {
    return (
        <div className={classNames(cls.Navbar ?? '', {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.link}
                onClick={onLogout}
              >
                {t('Выйти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
              />
        </div>
    )
  } else {
    return (
        <div className={classNames(cls.Navbar ?? '', {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.link}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>

    )
  }
}
