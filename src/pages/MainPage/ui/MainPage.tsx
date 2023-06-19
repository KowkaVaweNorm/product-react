import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation()
  return (
      <div>
          <h2>{t('Главная страница')}</h2>
          <Counter />
      </div>
  )
}

export default MainPage
