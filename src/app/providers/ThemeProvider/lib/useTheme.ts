import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    let newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    newTheme = newTheme ?? Theme.LIGHT
    // @ts-ignore
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    // @ts-ignore
    theme,
    toggleTheme
  }
}
