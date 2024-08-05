import cls from './ArticleList.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleView, type Article } from '../../model/type/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface IArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
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
    isLoading,
    target
  } = props;
  const { t } = useTranslation('article');
  const renderArticle = (article: Article): JSX.Element => {
    return (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
            target={target}/>
    );
  };

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
