import cls from './ArticlesPage.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
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
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/redesigned/Button';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';

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
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });
  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={
            <>
              <Button fullWidth>
                <AppLink to={getRouteArticleCreate()} variant="primary" className={cls.createBtn}>
                  {t('Создать статью')}
                </AppLink>
              </Button>
              <br />
              <FiltersContainer />
            </>
          }
          content={
            <Page
              data-testid="ArticlesPage"
              className={classNames(cls.ArticlesPageRedesigned, {}, [className])}
            >
              <ArticleInfiniteList className={cls.list} />
              <ArticlePageGreeting />
            </Page>
          }
        />
      }
      off={
        <Page data-testid="ArticlesPage" className={classNames(cls.ArticlesPage, {}, [className])}>
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
