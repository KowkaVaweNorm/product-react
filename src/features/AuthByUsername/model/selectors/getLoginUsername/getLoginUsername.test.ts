import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return is loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        isLoading: false,
        password: 'password',
        error: 'error'
      }
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
