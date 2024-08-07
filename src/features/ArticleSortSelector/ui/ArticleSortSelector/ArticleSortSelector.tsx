import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, type SelectOption } from '@/shared/ui/Select';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
interface IArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps): JSX.Element => {
  const {
    onChangeOrder,
    onChangeSort,
    order,
    sort,
    className
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    }
  ], [t]);
  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    },
    {
      value: ArticleSortField.VIEW,
      content: t('просмотрам')
    }
  ], [t]);

  return (
      <div
          className={classNames(cls.article_sort_selector ?? '', {}, [className])}
        >
          <Select<ArticleSortField>
              options={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
              label={t('Сортировка ПО')} />
          <Select<SortOrder>
              options={orderOptions}
              value={order}
              onChange={onChangeOrder}
              label={t('по')}
              className={cls.order}
                 />
      </div>
  );
});
