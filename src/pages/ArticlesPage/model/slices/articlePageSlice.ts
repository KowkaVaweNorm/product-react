import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

import { ArticleView, type Article } from 'entities/Article';
import { type ArticlesPageSchema } from '../types/artcilesPage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articlesPage ?? articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false
  }),
  reducers: {
    setView: (state: ArticlesPageSchema, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state: ArticlesPageSchema, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state: ArticlesPageSchema) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticlesList.pending, (state) => {
          state.error = undefined;
          state.isLoading = true;
        })
      .addCase(fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        })
      .addCase(fetchArticlesList.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
  }

});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
