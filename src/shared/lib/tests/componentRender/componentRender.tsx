import { type RenderResult, render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18nForTest'

export interface componentRenderOptions {
  route: string
}

export function componentRender
(component: ReactNode, options: componentRenderOptions = {}): RenderResult {
  const {
    route = '/'
  } = options
  return render(
      <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTest}>
              {component}
          </I18nextProvider>
      </MemoryRouter>
  )
}
