import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const {
    theme = Theme.LIGHT,
    setTheme
  } = useContext(ThemeContext)
  console.log(theme)
  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    if (setTheme != null) {
      setTheme(newTheme)
      document.body.className = newTheme
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
  }

  return {
    theme,
    toggleTheme
  }
}
