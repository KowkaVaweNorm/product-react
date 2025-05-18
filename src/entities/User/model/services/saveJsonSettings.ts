import { createAsyncThunk } from '@reduxjs/toolkit';

import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { type JsonSettings } from '../types/jsonSettings';

import { type ThunkConfig } from '@/app/providers/StoreProvider';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (userData == null) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
        }),
      ).unwrap();

      if (response.jsonSettings == null) {
        return rejectWithValue('');
      }

      return response.jsonSettings;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
