import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error Потому чьл гажэл
  setTimeout(() => { resolve(import('./ArticleEditPage')); }, 1500);
}));
