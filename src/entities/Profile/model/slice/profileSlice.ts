import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/Profile';

export interface ProfileState {
  value: number
}

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  }
});

export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;
