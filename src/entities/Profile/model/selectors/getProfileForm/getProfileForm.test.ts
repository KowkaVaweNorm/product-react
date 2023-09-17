import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

import { type StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';

describe('getProfileForm.test', () => {
  test('should return form', () => {
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
        form: data
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
