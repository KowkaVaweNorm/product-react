import cls from './ArticlesPageFilters.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useCallback } from 'react';
import {
  type ArticleView,
  ArticleViewSelector,
  type ArticleSortField,
  ArticleTypeTabs,
  type ArticleType
} from '@/entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { ArticleSortSelector } from '@/entities/Article';
import { type SortOrder } from '@/shared/types/sort';
import {
  fetchArticlesList
} from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

interface IArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: IArticlesPageFiltersProps): JSX.Element => {
  const {
    className
  } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlesPageActions.setSearch(newSearch));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
      <div
          className={classNames(cls.articlespagefilters ?? '', {}, [className])}
    >
          <div className={cls.sortWrapper}>
              <ArticleSortSelector
                  order={ order}
                  sort={sort }
                  onChangeOrder={onChangeOrder }
                  onChangeSort={onChangeSort }

        />
              <ArticleViewSelector
                  onViewClick={onChangeView}
                  view={view} />
              <Card className={cls.search}>
                  <Input
                      value={search}
                      onChange={onChangeSearch}
                      placeholder={t('Поиск')} />
              </Card>
              <ArticleTypeTabs
                  className={cls.tabs}
                  onChangeType={onChangeType}
                  value={type}
              />
          </div>
      </div>
  );
});
