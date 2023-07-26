import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error потому что надо
  setTimeout(() => { resolve(import('./ProfilePage')); }, 1500);
}));
