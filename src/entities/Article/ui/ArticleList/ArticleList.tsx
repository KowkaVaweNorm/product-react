import cls from './ArticleList.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { ArticleVew, type Article } from '../../model/type/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface IArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view: ArticleVew
}

const getSkeletons = (view: ArticleVew): JSX.Element[] => {
  return new Array(view === ArticleVew.SMALL ? 9 : 3)
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
    view = ArticleVew.SMALL,
    isLoading
  } = props;

  if (isLoading === true) {
    return (<div className={
      classNames(cls.article_list ?? '', {}, [className, cls[view]])
    }>
        {getSkeletons(view)}
    </div>);
  }

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
      </div>
  );
});
