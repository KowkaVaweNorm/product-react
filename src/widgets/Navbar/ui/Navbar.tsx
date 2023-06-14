/* eslint-disable i18next/no-literal-string */

import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useCallback, useState } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])
  return (
      <div className={classNames(cls.Navbar ?? '', {}, [className])}>

          <Button
              theme={ButtonTheme.CLEAR_INVERTED}
              className={cls.link}
              onClick={onToggleModal}
          >
              {t('Войти')}
          </Button>
          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis molestias officiis deserunt impedit amet,
              dicta autem quaerat delectus eaque voluptates sapiente
              non voluptatem, praesentium quia quod est. Aliquam, reiciendis quaerat!
          </Modal>
      </div>
  )
}
