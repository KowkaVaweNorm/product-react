import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './CreateArticleButton.module.scss';
import { getCreateArticleData } from '../../model/selectors/articleCreateSelectors';
import { getArticleBlocks } from '../../model/slice/articleCreateSlice';

import { useCreateArticleMutation, type Article } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

export const CreateArticleButton = () => {
  const { t } = useTranslation('article-create');
  const article = useSelector(getCreateArticleData);
  const allBlocks = useSelector(getArticleBlocks.selectAll);
  const [createArticleAsync] = useCreateArticleMutation();
  const handleCreate = () => {
    if (article !== undefined) {
      const articleToCreate: Partial<Omit<Article, 'id'>> = {
        ...article,
        blocks: allBlocks.map(({ draftId, ...block }) => block),
      };
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();

      const formattedDate = `${day}.${month}.${year}`;

      createArticleAsync({ ...articleToCreate, createdAt: formattedDate, views: 1 })
        .then((res) => {
          console.log('result of create article:', res);
        })
        .catch((err) => {
          console.log('error of create article:', err);
        });
    }
  };

  return (
    <div className={cls.create_wrap}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<>{t('В разработке')}</>}
        off={
          <HStack gap="16" justify="end">
            <Button onClick={handleCreate}>{t('Создать статью')}</Button>
          </HStack>
        }
      />
    </div>
  );
};
