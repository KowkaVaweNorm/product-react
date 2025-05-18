import { getLoginPassword } from './getLoginPassword';

import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginPassword.test', () => {
  test('should return is loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        isLoading: false,
        password: 'password',
        error: 'error',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('password');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
