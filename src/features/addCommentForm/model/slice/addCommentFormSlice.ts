import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  error: undefined,
  text: ''
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
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(ASYNC_FETCH.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(ASYNC_FETCH.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(ASYNC_FETCH.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload as string;
  //     });
  // }
});

export const { actions: addCommentFormSliceActions } = addCommentFormSlice;
export const { reducer: addCommentFormSliceReducer } = addCommentFormSlice;
