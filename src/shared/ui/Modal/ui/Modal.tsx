import { type Mods, classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Portal } from '@headlessui/react';
import { type ReactNode } from 'react';
import { Overlay } from '../../Overlay/Overlay';
import cls from './Modal.module.scss';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props;

  const {
    close,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened ?? '']: isOpen,
    [cls.isClosing ?? '']: isClosing
  };

  if (Boolean(lazy) && !isMounted) {
    return null;
  }

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
              <Overlay onClick={close} />
              <div
                  className={cls.content}
              >
                  {children}
              </div>
          </div>
      </Portal>
  );
};
