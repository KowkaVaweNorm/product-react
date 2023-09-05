import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

import { type StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';

describe('getProfileData.test', () => {
  test('should return data', () => {
    const data = {
      username: 'KowkaVN',
      age: 22,
      country: Country.Russia,
      lastname: 'Vlom',
      first: 'Kowka',
      city: 'Moscow',
      currency: Currency.USD
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
