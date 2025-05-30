import { type HTMLAttributeAnchorTarget, memo, type RefObject } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';
import { type Article } from '../../model/type/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface IArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  possibleCountArticles?: number;
  refContainer?: RefObject<HTMLDivElement>;
}
const getSkeletons = (view: ArticleView, possibleCount?: number) =>
  new Array(view === ArticleView.SMALL ? (possibleCount ?? 9) : (possibleCount ?? 3))
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: IArticleListProps): JSX.Element => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading = false,
    target,
    possibleCountArticles,
    refContainer,
    ...otherProps
  } = props;
  const { t } = useTranslation('article');
  const hasSomeArticles = articles !== undefined && articles.length > 0;
  if (!isLoading && !hasSomeArticles) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={t('Статьи не найдены')} size="l" />}
          off={<TextDeprecated size={TextSize.L} title={t('Статьи не найдены')} />}
        />
      </div>
    );
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          flexref={refContainer}
          wrap="wrap"
          gap="16"
          className={classNames(cls.ArticleListRedesigned, {}, [className])}
          data-testid="ArticleList"
          {...otherProps}
        >
          {articles?.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view, possibleCountArticles)}
        </HStack>
      }
      off={
        <div
          ref={refContainer}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
          {...otherProps}
        >
          {articles?.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view, possibleCountArticles)}
        </div>
      }
    />
  );
});
