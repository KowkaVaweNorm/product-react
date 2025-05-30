import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserDataByIdQuery } from '../../api/userApi';
import { type User } from '../types/user';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (userId == null || userId.length < 1) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        (response.features?.isAppRedesigned ?? false) ? 'new' : 'old',
      );

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
