import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation()
  return (
      <div>
          <BugButton />
          <h2>{t('Главная страница')}</h2>
      </div>
  )
}

export default MainPage
