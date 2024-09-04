import { getArticleDetailsData } from '../../../../model/selectors/articleDetails';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useSelector } from 'react-redux';
import { renderArticleBlock } from '../renderBlock';

import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from '../ArticleDetails.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
export const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <VStack gap="4" max>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={<SkeletonRedesigned width="100%" height={420} border="16px" />}
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </VStack>
  );
};
