import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError, type ProfileSchema } from './../types/profile';
import { ProfileActions, ProfileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(ProfileReducer(
      state as ProfileSchema,
      ProfileActions.setReadonly(true)
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(ProfileReducer(
      state as ProfileSchema,
      ProfileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(ProfileReducer(
      state as ProfileSchema,
      ProfileActions.updateProfile({ username: '123456' })
    )).toEqual({
      form: { username: '123456' }
    });
  });
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR]
    };
    expect(ProfileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateError: undefined
    });
  });
  test('test update profile service fullfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateError: [ValidateProfileError.SERVER_ERROR]
    };
    expect(ProfileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data
    });
  });
});
