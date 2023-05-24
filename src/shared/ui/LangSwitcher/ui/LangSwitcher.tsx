import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
      <Button className={classNames(cls.LangSwitcher, {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggle}>
          {t('Язык')}
      </Button>
  )
}
