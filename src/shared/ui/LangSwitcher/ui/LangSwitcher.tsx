import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className = '' }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    const htmlEl = document.getElementsByTagName('html')
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    if (htmlEl.length > 0) {
      htmlEl[0]?.setAttribute('lang', i18n.language)
    }
  }
  return (
      <Button className={classNames('', {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggle}>
          {t('Язык')}
      </Button>
  )
}
