import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

import { type StateSchema } from '@/app/providers/StoreProvider';

const Fullstate: DeepPartial<StateSchema> = {
  addCommentForm: {
    text: 'testText',
    error: 'testError',
  },
};
const Emptystate: DeepPartial<StateSchema> = {
  addCommentForm: {
    text: undefined,
    error: undefined,
  },
};
describe('addCommentFormSelectors.test', () => {
  test('should return text comment', () => {
    const data = 'testText';
    expect(getAddCommentFormText(Fullstate as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    expect(getAddCommentFormError(Emptystate as StateSchema)).toEqual(undefined);
  });
});

describe('articleDetailsloading.test', () => {
  test('should return error text comment', () => {
    const data = 'testError';
    expect(getAddCommentFormError(Fullstate as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    expect(getAddCommentFormError(Emptystate as StateSchema)).toEqual(undefined);
  });
});
