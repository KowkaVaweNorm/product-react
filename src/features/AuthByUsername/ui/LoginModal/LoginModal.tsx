import { Suspense } from 'react';

import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { Modal } from '@/shared/ui/redesigned/Modal';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps): JSX.Element => {
  const { className = '', isOpen, onClose } = props;

  return (
    <Modal
      className={classNames(cls.LoginModal ?? '', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
