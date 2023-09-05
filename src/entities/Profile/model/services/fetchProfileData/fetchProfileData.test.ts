import axios from 'axios';
import { fetchProfileData } from './fetchProfileData';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

jest.mock('axios');

const data = {
  username: 'KowkaVN',
  age: 22,
  country: Country.Russia,
  lastname: 'Vlom',
  first: 'Kowka',
  city: 'Moscow',
  currency: Currency.USD
};

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockResolvedValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(axios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(axios.get).toHaveBeenCalled(); ;
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
