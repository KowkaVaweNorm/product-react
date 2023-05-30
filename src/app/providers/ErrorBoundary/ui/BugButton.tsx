import { useEffect, useState } from 'react'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Button } from 'shared/ui/Button'

// Компонент для тестов
export const BugButton = (): JSX.Element => {
  const [error, setError] = useState(false)

  const myThrow = (): void => {
    setError(true)
  }

  useEffect(() => {
    if (error) throw new Error()
  }, [error])
  return (
      <Button
          onClick={myThrow}>
          throw error
      </Button>
  )
}
