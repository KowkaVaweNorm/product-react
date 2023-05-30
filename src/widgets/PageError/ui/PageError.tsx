import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className = '' }: PageErrorProps): JSX.Element => {
  const { t } = useTranslation()
  const reloadPage = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.reload()
  }

  return (
      <div className={classNames(cls.PageError ?? '', {}, [className])}>
          <h4>Произошла ошибка</h4>
          <Button onClick={reloadPage}>
              {t('Обновить страницу')}
          </Button>
      </div>
  )
}
