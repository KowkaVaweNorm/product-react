import cls from './ArticleList.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { type HTMLAttributeAnchorTarget, memo, useState, useRef, useEffect } from 'react';
import { ArticleView, type Article } from '../../model/type/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_ID } from 'shared/const/localstorage';

interface IArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  onLoadNextPart?: () => void
}

const Header = (): JSX.Element => <ArticlesPageFilters />;

const getSkeletons = (view: ArticleView): JSX.Element[] => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            view={view}
            key={index}
            className={cls.card}/>
    ));
};

export const ArticleList = memo((props: IArticleListProps): JSX.Element => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
    onLoadNextPart
  } = props;
  const { t } = useTranslation('article');
  const [selectedArticleId, setSelectedArticleId] = useState(1);
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

  useEffect(() => {
    const paged = (Boolean(sessionStorage.getItem(ARTICLE_LIST_ITEM_ID))) || 1;
    setSelectedArticleId(+paged);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (view === ArticleView.SMALL) {
      timeoutId = setTimeout(() => {
        if (virtuosoGridRef.current != null) {
          virtuosoGridRef.current.scrollToIndex(selectedArticleId);
        }
      }, 50);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedArticleId, view]);

  const renderArticle = (index: number, article: Article): JSX.Element => {
    return (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}/>
    );
  };

  const Footer = memo((): JSX.Element | null => {
    if (isLoading === true) {
      return (
          <div className={cls.sceleton}>
              {getSkeletons(view)}
          </div>
      );
    } else return null;
  });

  if (isLoading === false && (articles.length === 0)) {
    return (
        <div
            className={
        classNames(cls.article_list ?? '', {}, [className, cls[view]])
      }>
            <Text
                title={t('Статьи не найдены')}
                size={TextSize.L}
            />
        </div>
    );
  }

  // return (
  //     <div
  //         className={
  //           classNames(cls.article_list ?? '', {}, [className, cls[view]])
  //         }
  //     >
  //         {articles.length > 0
  //           ? articles.map(renderArticle)
  //           : null
  //     }
  //         {isLoading === true && getSkeletons(view)}
  //     </div>
  // );

  const ItemContainerComp = (props: any): JSX.Element => {
    const {
      index,
      view
    } = props;
    return (
        <div className={cls.item_container}>
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        </div>
    );
  };

  return (
      <div className={classNames(cls.article_list ?? '', {}, [cls[view]])}>
          {view === ArticleView.BIG
            ? (<Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                      Header,
                      Footer
                    }}

              />)
            : (
                <VirtuosoGrid
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                      Header,
                      ScrollSeekPlaceholder: ItemContainerComp
                    }}
                    endReached={onLoadNextPart}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={cls.items_wrapper}
                    scrollSeekConfiguration={{
                      enter: (velocity: number) => Math.abs(velocity) > 200,
                      exit: (velocity: number) => Math.abs(velocity) < 30
                    }}
                 />
              )

        }
      </div>
  );
});
