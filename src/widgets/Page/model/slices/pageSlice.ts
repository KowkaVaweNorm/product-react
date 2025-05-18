import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type PageSchema } from '../types/page';

const initialState: PageSchema = {
  scroll: {},
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollPosition: (
      state: PageSchema,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: pageActions } = pageSlice;
export const { reducer: pageReducer } = pageSlice;
