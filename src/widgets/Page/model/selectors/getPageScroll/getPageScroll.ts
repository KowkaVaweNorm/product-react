import { type StateSchema } from 'app/providers/StoreProvider';
import { type ScrollSchema } from '../../types/page';
import { createSelector } from '@reduxjs/toolkit';

export const getPageScroll = (state: StateSchema): ScrollSchema => state.page.scroll;
export const getPageScrollByPath = createSelector(
  getPageScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0
);
