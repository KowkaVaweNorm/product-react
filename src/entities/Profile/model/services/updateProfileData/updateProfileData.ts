/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileError, type Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData =
createAsyncThunk<Profile, void,
ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (errors.length) {
      return rejectWithValue(errors);
    }
    if (formData === undefined || formData.id === undefined) {
      return rejectWithValue([ValidateProfileError.NO_DATA]);
    }
    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (response.data === undefined) {
        console.log('error server');

        throw new Error();
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);
