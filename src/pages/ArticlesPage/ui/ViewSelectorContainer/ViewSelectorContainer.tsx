import { memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
  const { className } = props;
  const { view, onChangeView } = useArticleFilters();

  return <ArticleViewSelector className={className} view={view} onViewClick={onChangeView} />;
});
