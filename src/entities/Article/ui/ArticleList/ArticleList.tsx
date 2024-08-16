import cls from './ArticleList.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { type Article } from '../../model/type/article';

interface IArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}
const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: IArticleListProps): JSX.Element => {
  const { className, articles, view = ArticleView.SMALL, isLoading, target } = props;
  const { t } = useTranslation('article');

  if (!(isLoading ?? false) && articles.length === 0) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          wrap="wrap"
          gap="16"
          className={classNames(cls.ArticleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {(isLoading ?? false) && getSkeletons(view)}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {(isLoading ?? false) && getSkeletons(view)}
        </div>
      }
    />
  );
});
