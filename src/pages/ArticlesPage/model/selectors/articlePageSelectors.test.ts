import { type StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from './articlesPageSelectors';
import { ArticleView } from '@/entities/Article';

const SuccessState: DeepPartial<StateSchema> = {
  articlesPage: {
    isLoading: false,
    error: undefined,
    view: ArticleView.BIG,
  },
};
const LoadingState: DeepPartial<StateSchema> = {
  articlesPage: {
    isLoading: true,
    error: undefined,
    view: undefined,
  },
};
const ErrorState: DeepPartial<StateSchema> = {
  articlesPage: {
    isLoading: false,
    error: 'error',
    view: undefined,
  },
};
const Emptystate: DeepPartial<StateSchema> = {
  articlesPage: {
    error: undefined,
    isLoading: undefined,
    view: undefined,
  },
};
describe('articlesPageSelectors success state', () => {
  const currentState = SuccessState as StateSchema;
  test('should return isLoading false', () => {
    expect(getArticlesPageIsLoading(currentState)).toEqual(false);
  });
  test('should return error undefined', () => {
    expect(getArticlesPageError(currentState)).toEqual(undefined);
  });
  test('should return error undefined', () => {
    expect(getArticlesPageView(currentState)).toEqual(ArticleView.BIG);
  });
});
describe('articlesPageSelectors error state', () => {
  const currentState = ErrorState as StateSchema;
  test('should return isLoading false', () => {
    expect(getArticlesPageIsLoading(currentState)).toEqual(false);
  });
  test('should return error undefined', () => {
    expect(getArticlesPageError(currentState)).toEqual('error');
  });
  test('should return error undefined', () => {
    expect(getArticlesPageView(currentState)).toEqual(ArticleView.SMALL);
  });
});
describe('articlesPageSelectors loading state', () => {
  const currentState = LoadingState as StateSchema;
  test('should return isLoading false', () => {
    expect(getArticlesPageIsLoading(currentState)).toEqual(true);
  });
  test('should return error undefined', () => {
    expect(getArticlesPageError(currentState)).toEqual(undefined);
  });
  test('should return error undefined', () => {
    expect(getArticlesPageView(currentState)).toEqual(ArticleView.SMALL);
  });
});
describe('articlesPageSelectors empty state', () => {
  const currentState = Emptystate as StateSchema;
  test('should return isLoading false', () => {
    expect(getArticlesPageIsLoading(currentState)).toEqual(false);
  });
  test('should return error undefined', () => {
    expect(getArticlesPageError(currentState)).toEqual(undefined);
  });
  test('should return error undefined', () => {
    expect(getArticlesPageView(currentState)).toEqual(ArticleView.SMALL);
  });
});
