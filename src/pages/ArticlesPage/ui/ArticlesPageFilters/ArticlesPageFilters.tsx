import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticlesPageFilters.module.scss';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

interface IArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: IArticlesPageFiltersProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation('article');
  const {
    onChangeSort,
    onChangeType,
    sort,
    type,
    onChangeSearch,
    search,
    onChangeView,
    view,
    onChangeOrder,
    order,
  } = useArticleFilters();

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')} />
      </Card>
      <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs} />
    </div>
  );
});
