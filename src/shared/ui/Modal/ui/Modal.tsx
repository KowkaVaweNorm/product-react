import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Modal.module.scss';
import { useState, type ReactNode, useRef, useEffect, useCallback } from 'react';
// eslint-disable-next-line kowka-vn-plugin/fsd-path-checker
import { Portal } from '@/shared/ui/Portal';

interface ModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  children?: ReactNode
  lazy?: boolean
}

export const Modal = (props: ModalProps): JSX.Element | null => {
  const {
    className,
    isOpen = false,
    onClose,
    children,
    lazy
  } = props;
  const ANIMATION_DELAY = 190;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef <ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback((): void => {
    if (onClose != null) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };
  const mods: Record<string, boolean> = {
    [cls.opened ?? '']: isOpen,
    [cls.isClosing ?? '']: isClosing
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if ((lazy ?? false) && !isMounted) {
    return null;
  }
  return (
      <Portal>
          <div className={classNames(cls.Modal ?? '', mods, [className ?? ''])}>
              <div className= {cls.overlay} onClick={closeHandler}>
                  <div className={ cls.content ?? '' }
                      onClick={onContentClick}>
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  );
};
