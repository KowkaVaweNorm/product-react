import { useTranslation } from 'react-i18next';
import { memo, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { getArticles } from '../../model/slices/articlePageSlice';
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

// Крайние случаи Infinity списка:
// 1 - Когда догружать, до куда скроллить?
// 2 - Что если догрузили недостаточно
// 3 - Что если данные на сервере обновились и пользователь снова доскролил ожидая увидеть догрузку свежих данных

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const listRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const hasMore = useSelector(getArticlesPageHasMore);

  const onLoadNextPart = useCallback(() => {
    if (isLoading) return;
    dispatch(fetchNextArticlesPage());
  }, [dispatch, isLoading]);

  useInfiniteScroll({
    triggerRef,
    retryCondition: hasMore,
    callback: onLoadNextPart,
    options: {
      rootMargin: '200px',
    },
  });

  if (error !== undefined) {
    return <Text text={t('Ошибка при загрузке статей')} />;
  }

  return (
    <div id="wrappperIdMyGod">
      <ArticleList
        refContainer={listRef}
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={className}
      />
      <div ref={triggerRef}></div>
    </div>
  );
});
