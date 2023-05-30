import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button } from 'shared/ui/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const onToggle = (): void => {
    setCollapsed((prev: boolean) => !prev)
  }

  return (
      <div
          className={classNames(cls.Sidebar ?? '', { [cls.collapsed ?? '']: collapsed }, [className])}
    >
          <Button onClick={onToggle}>{t('Переключить')}</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  )
}
