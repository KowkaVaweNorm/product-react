import { createSelector } from '@reduxjs/toolkit';

import { type ScrollSchema } from '../../types/page';

import { type StateSchema } from '@/app/providers/StoreProvider';

export const getPageScroll = (state: StateSchema): ScrollSchema => state.page.scroll;
export const getPageScrollByPath = createSelector(
  getPageScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0,
);
