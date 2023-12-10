import cls from './ArticleList.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { ArticleView, type Article } from '../../model/type/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface IArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view: ArticleView
}

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
    isLoading
  } = props;

  const renderArticle = (article: Article): JSX.Element => {
    return (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            className={cls.card}/>
    );
  };

  return (
      <div
          className={
            classNames(cls.article_list ?? '', {}, [className, cls[view]])
          }
      >
          {articles.length > 0
            ? articles.map(renderArticle)
            : null
      }
          {isLoading === true && getSkeletons(view)}
      </div>
  );
});
