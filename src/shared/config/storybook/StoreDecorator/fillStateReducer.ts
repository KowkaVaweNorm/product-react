import { StateSchema } from '@/app/providers/StoreProvider';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const fillStateAction = createAction<DeepPartial<StateSchema>>('fillstate');
export const fillStateReducer = createReducer(0, (builder) => {
  builder.addCase('fillstate', (state: any, action: any) => action.payload);
});
