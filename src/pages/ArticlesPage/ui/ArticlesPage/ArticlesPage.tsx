import cls from './ArticlesPage.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps): JSX.Element => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  // TODO: Доделать infinit list
  const infListRef = useRef();
  const onLoadNextPart = useCallback(() => {
    console.log('trigger intersection');
    /*
    $0.getBoundingClientRect().height + ($0.getBoundingClientRect().top - window.innerHeight)
     */
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={
            <Page
              data-testid="ArticlesPage"
              onScrollEnd={{
                callback: onLoadNextPart,
                options: {
                  rootMargin: '0px 0px 1000px 0px',
                },
              }}
              className={classNames(cls.ArticlesPageRedesigned, {}, [className])}
            >
              <ArticleInfiniteList className={cls.list} />
              <ArticlePageGreeting />
            </Page>
          }
        />
      }
      off={
        <Page
          data-testid="ArticlesPage"
          onScrollEnd={{
            callback: onLoadNextPart,
            options: {
              rootMargin: '0px 0px 1000px 0px',
            },
          }}
          className={classNames(cls.ArticlesPage, {}, [className])}
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList className={cls.list} />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
