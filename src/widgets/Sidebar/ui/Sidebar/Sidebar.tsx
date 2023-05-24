import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button } from 'shared/ui/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed((prev: boolean) => !prev)
  }

  return (
  // eslint-disable-next-line react/react-in-jsx-scope
      <div
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
          <Button onClick={onToggle}>Toggle</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  )
}
