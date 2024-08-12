import { getQueryParams } from './addQueryParams';

describe('shared/lib/url/addQueryParams', () => {
  test('test with one params', () => {
    const params = getQueryParams({
      test: 'test1',
    });

    expect(params.searchParams.toString()).toBe('test=test1');
  });
  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'test1',
      test2: 'test2',
      test3: 'test3',
    });

    expect(params.searchParams.toString()).toBe('test=test1&test2=test2&test3=test3');
  });
  test('test with undefined', () => {
    const params = getQueryParams({
      test: 'test1',
      test2: undefined,
    });

    expect(params.searchParams.toString()).toBe('test=test1');
  });
});
