import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';

import { ArticleView, type Article, ArticleSortField, ArticleType } from '@/entities/Article';
import { type ArticlesPageSchema } from '../types/artcilesPage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { type SortOrder } from '@/shared/types/sort';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? articlesAdapter.getInitialState(),
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
    limit: 9,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: ArticleType.ALL,
    _inited: false,
  }),
  reducers: {
    setView: (state: ArticlesPageSchema, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state: ArticlesPageSchema, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state: ArticlesPageSchema, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state: ArticlesPageSchema, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state: ArticlesPageSchema, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLimit: (state: ArticlesPageSchema, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setType: (state: ArticlesPageSchema, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    initState: (state: ArticlesPageSchema) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace === true) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        // Если элементов пришло с сервера меньше чем мы подгружаем, значит больше их нет -> hasMore= false
        // Если элементов с севрера пришло больше или равно нашему лимиту то скорее всего элементы ещё есть -> hasMore= true
        state.hasMore = action.payload.length >= state.limit;
        if (action.meta.arg.replace === true) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
