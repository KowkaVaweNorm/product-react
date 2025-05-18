import { useSelector } from 'react-redux';

import { getArticleDetailsData } from '../../../../model/selectors/articleDetails';
import cls from '../ArticleDetails.module.scss';
import { renderArticleBlock } from '../renderBlock';

import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
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
