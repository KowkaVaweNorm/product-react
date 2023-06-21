import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps): JSX.Element => {
  const {
    className,
    isOpen,
    onClose
  } = props
  return (
      <Modal
          className={ classNames(cls.LoginModal ?? '', {}, [])}
          isOpen={isOpen}
          onClose={onClose}
      >
          <LoginForm />
      </Modal>
  )
}
