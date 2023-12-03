import {
  getArtilceDetailsData,
  getArtilceDetailsError,
  getArtilceDetailsIsLoading
} from './articleDetails';

import { type StateSchema } from 'app/providers/StoreProvider';

describe('articleDetailsData.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle'
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    };
    expect(getArtilceDetailsData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArtilceDetailsData(state as StateSchema)).toEqual(undefined);
  });
});

describe('articleDetailsloading.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: undefined,
        isLoading: true
      }
    };
    expect(getArtilceDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArtilceDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});

describe('articleDetaierror.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: undefined,
        isLoading: false,
        error: 'err'
      }
    };
    expect(getArtilceDetailsError(state as StateSchema)).toEqual('err');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArtilceDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
