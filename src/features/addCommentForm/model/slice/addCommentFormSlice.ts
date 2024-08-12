import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  error: undefined,
  text: '',
};

export const addCommentFormSlice = createSlice({
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

export const { actions: addCommentFormSliceActions } = addCommentFormSlice;
export const { reducer: addCommentFormSliceReducer } = addCommentFormSlice;
