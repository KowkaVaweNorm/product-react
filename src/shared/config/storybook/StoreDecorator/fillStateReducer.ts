import { StateSchema } from '@/app/providers/StoreProvider';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const storybookSlice = createSlice({
  name: 'storybookSlice',
  initialState: {},
  reducers: {
    fillState: (state, action: PayloadAction<DeepPartial<StateSchema>>) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { actions: storybookActions } = storybookSlice;
export const { reducer: storybookReducer } = storybookSlice;
