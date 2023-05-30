import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}))
