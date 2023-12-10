/* eslint-disable max-len */
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ArticlesPage.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../model/slices/articlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../model/selectors/articlesPageSelectors';
import { useCallback } from 'react';

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

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  // const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
      <DynamicModuleLoader reducers={reducers}>
          <div className={classNames(cls.articles_page, {}, [className])} >
              <ArticleViewSelector
                  onViewClick={onChangeView}
                  view={view}/>
              <ArticleList
                  isLoading={isLoading}
                  articles={articles}
                  view={view}/>
          </div>
      </DynamicModuleLoader>
  );
};

export default ArticlesPage;
