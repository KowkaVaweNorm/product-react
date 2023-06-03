
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.navbar ?? '', {}, [className])}>

          <div className={cls.link}></div>

          <AppLink
              to={'/'}
              theme={AppLinkTheme.SECONDARY}
              className={cls.mainLink}
            >
              {t('Главная')}
          </AppLink>

          <AppLink
              to={'/About'}
              theme={AppLinkTheme.SECONDARY}
            >
              {t('О сайте')}
          </AppLink>

      </div>
  )
}
