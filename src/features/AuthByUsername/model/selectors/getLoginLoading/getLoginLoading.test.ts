import { getLoginLoading } from './getLoginLoading';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getLoginLoading.test', () => {
  test('should return is loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        isLoading: true,
        password: '',
        error: 'error'
      }
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
