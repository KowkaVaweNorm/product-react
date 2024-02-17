import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error потому что надо
  setTimeout(() => { resolve(import('./ArticlesPage')); }, 400);
}));
