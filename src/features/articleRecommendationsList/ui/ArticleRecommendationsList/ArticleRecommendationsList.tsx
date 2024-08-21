import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (error != null) {
    return null;
  }

  return (
    <VStack
      data-testid="ArticleRecommendationsList"
      gap="8"
      className={classNames('', {}, [className])}
    >
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Text size={TextSize.L} title={t('Рекомендуем')} />}
        off={<TextDeprecated size={TextSize.L} title={t('Рекомендуем')} />}
      />
      <ArticleList
        isLoading={isLoading}
        articles={articles}
        target="_blank"
        possibleCountArticles={3}
      />
    </VStack>
  );
});
