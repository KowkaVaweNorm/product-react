import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
