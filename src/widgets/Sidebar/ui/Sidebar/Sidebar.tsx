import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { ButtonSize } from 'shared/ui/Button/ui/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routerConfig'
import MainIcon from 'shared/assets/icons/home-icon.svg'
import AboutIcon from 'shared/assets/icons/about-icon.svg'
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
          data-testid="sidebar"
          className={classNames(cls.Sidebar ?? '', { [cls.collapsed ?? '']: collapsed },
            [className])}
    >
          <Button
              data-testid="sidebar-toggle"
              onClick={onToggle}
              className={cls.collapsedBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              square={true}
              size={ButtonSize.L}
      >
              {collapsed ? '>' : '<'}
          </Button>

          <div className={cls.items}>
              <div
        >
                  <AppLink
                      to={RoutePath.main}
                      theme={AppLinkTheme.SECONDARY}
                      className={cls.item}
          >
                      <MainIcon className={cls.icon} />
                      <span
                          className={cls.link}
            >
                          {t('Главная')}

                      </span>
                  </AppLink>
              </div>

              <div>
                  <AppLink
                      to={RoutePath.about}
                      theme={AppLinkTheme.SECONDARY}
                      className={cls.item}
                  >
                      <AboutIcon className={cls.icon} />
                      <span
                          className={cls.link}
                      >
                          {t('О сайте')}

                      </span>
                  </AppLink>
              </div>
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
      </div>
  )
}
