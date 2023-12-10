import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error потому что надо
  setTimeout(() => { resolve(import('./ArticleDetailsPage')); }, 400);
}));
