import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import {
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../../model/selectors/articleDetails';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { articleDetailsReducer } from '../../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsDeprecated } from './deprecated/ArticleDetailsDeprecated';
import { Redesigned } from './redesigned/ArticleDetails';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetailsSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });
  return (
    <VStack gap="16" max>
      <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
      <Skeleton className={cls.title} width={300} height={32} />
      <Skeleton className={cls.skeleton} width={600} height={24} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
    </VStack>
  );
};

interface IProps {
  className?: string;
  id?: string;
}

const ArticleDetails = memo((props: IProps): JSX.Element => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading ?? true) {
    content = <ArticleDetailsSkeleton />;
  } else if (error !== undefined) {
    content = (
      <TextDeprecated align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи.')} />
    );
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<ArticleDetailsDeprecated />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
export default ArticleDetails;
