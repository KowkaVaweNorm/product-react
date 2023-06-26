import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const onChange = (val: string): void => {
    setValue(val)
  }
  return (
      <div>
          <h2>{t('Главная страница')}</h2>
      </div>
  )
}

export default MainPage
