import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from '@/app/App';
import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StrictMode } from 'react';

const container = document.getElementById('root');

if (container === null) {
  throw new Error('Не удалось найти контейнер');
}
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
