/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ArticlesPage.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageReducer,
  getArticles
} from '../../model/slices/articlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { useCallback } from 'react';
import { Page } from 'widgets/Page/ui/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useTranslation } from 'react-i18next';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

interface IArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = (props: IArticlesPageProps): JSX.Element => {
  const {
    className
  } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });
  if (error !== undefined) {
    return <div className={cls.error}>{t('При загрузке данных произошла ошибка')}</div>;
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page
              onScrollEnd={onLoadNextPart}
              className={
                classNames(cls.articles_page, {}, [className])
                } >
              <ArticlesPageFilters/>
              <ArticleList
                  isLoading={isLoading}
                  articles={articles}
                  view={view}
                  className={cls.list}/>
          </Page>
      </DynamicModuleLoader>
  );
};

export default ArticlesPage;
