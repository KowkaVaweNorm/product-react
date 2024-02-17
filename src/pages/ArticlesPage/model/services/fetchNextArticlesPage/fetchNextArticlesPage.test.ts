import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
jest.mock('axios');

jest.mock('../fetchArticlesList/fetchArticlesList');
describe('fetchNexArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.SMALL,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATED,
        error: undefined,
        type: ArticleType.ALL,
        _inited: false
      }
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        view: ArticleView.SMALL,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATED,
        error: undefined,
        type: ArticleType.ALL,
        _inited: false
      }
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('fetchArticlesList is loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
        view: ArticleView.SMALL,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATED,
        error: undefined,
        type: ArticleType.ALL,
        _inited: false
      }
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
