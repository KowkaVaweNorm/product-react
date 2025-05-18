import { type PayloadAction } from '@reduxjs/toolkit';

import { type AddCommentFormSchema } from '../types/addCommentForm';

import { buildSlice } from '@/shared/lib/store';

const initialState: AddCommentFormSchema = {
  error: undefined,
  text: '',
};

export const addCommentFormSlice = buildSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state: AddCommentFormSchema, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setError: (state: AddCommentFormSchema, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});
export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,

  useActions: useAddCommentFormActions,
} = addCommentFormSlice;
