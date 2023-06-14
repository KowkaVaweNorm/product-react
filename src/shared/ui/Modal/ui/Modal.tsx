import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Modal.module.scss'
import { useState, type ReactNode, useRef, useEffect, useCallback } from 'react'
import { Portal } from 'shared/ui/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  children?: ReactNode
}

export const Modal = (props: ModalProps): JSX.Element => {
  const {
    className,
    isOpen = false,
    onClose,
    children
  } = props
  const { theme } = useTheme()
  const ANIMATION_DELAY = 190

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef <ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback((): void => {
    if (onClose != null) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  // Новые ссылки!!!
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }
  const mods: Record<string, boolean> = {
    [cls.opened ?? '']: isOpen,
    [cls.isClosing ?? '']: isClosing,
    [theme ?? '']: true
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

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
  )
}
