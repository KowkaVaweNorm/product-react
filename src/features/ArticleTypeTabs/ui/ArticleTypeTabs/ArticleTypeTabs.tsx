import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo, useState } from 'react';
import { type TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

interface IArticleTypeTabsProps {
  className?: string;
  value?: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: IArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();
  const [localValue, setLocalValue] = useState<ArticleType>(ArticleType.ALL);
  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('Все статьи'),
      },
      {
        value: ArticleType.IT,
        content: t('Айти'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука'),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      setLocalValue(tab.value as ArticleType);
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          direction="column"
          tabs={typeTabs}
          value={value ?? localValue}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
      off={
        <TabsDeprecated
          tabs={typeTabs}
          value={value ?? localValue}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
    />
  );
});
