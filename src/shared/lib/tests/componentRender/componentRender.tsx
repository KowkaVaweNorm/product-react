import { type DeepPartial } from '@reduxjs/toolkit';
import { type RenderResult, render } from '@testing-library/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface componentRenderOptions {
  route?: string
  inititalState?: DeepPartial<StateSchema>
}

export function componentRender
(component: ReactNode, options: componentRenderOptions = {}): RenderResult {
  const {
    route = '/',
    inititalState
  } = options;

  return render(
      <StoreProvider initialState={inititalState}>
          <MemoryRouter initialEntries={[route]}>
              <I18nextProvider i18n={i18nForTest}>
                  {component}
              </I18nextProvider>
          </MemoryRouter>
      </StoreProvider>
  );
}
