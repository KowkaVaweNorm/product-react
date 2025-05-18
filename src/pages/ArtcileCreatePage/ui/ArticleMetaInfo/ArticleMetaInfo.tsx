import { useTranslation } from 'react-i18next';

import { useArticleCreateActions } from '../../model/slice/articleCreateSlice';

import { ArticleTypeSelect } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { debounce } from '@/shared/lib/utils/debounce';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getVStackStyle, VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';

export const ArticleMetaInfo = (): JSX.Element => {
  const { t } = useTranslation('article-create');
  const { setTitle, setSubTitle, setImg, setType } = useArticleCreateActions();
  return (
    <form {...getVStackStyle()} style={{ width: '100%' }}>
      <ToggleFeatures
        feature="isAppRedesigned"
        // eslint-disable-next-line i18next/no-literal-string
        on={<>in process</>}
        off={
          <VStack
            style={{
              border: '1px solid var(--primary-color)',
              padding: '10px 20px',
              width: '100%',
            }}
          >
            <span>{t('Описание статьи')}:</span>
            <br />
            <HStack gap="4">
              <label htmlFor="title">
                {t('Введите заголовок')}
                {'>'}
              </label>
              <Input id="title" onChange={debounce(setTitle)} />
            </HStack>
            <HStack gap="4">
              <label htmlFor="subtitle">
                {t('Введите подзаголовок')}
                {'>'}
              </label>
              <Input id="subtitle" onChange={debounce(setSubTitle)} />
            </HStack>
            <HStack gap="4">
              <label htmlFor="img">
                {t('Укажите ссылку на превью')}
                {'>'}
              </label>
              <Input id="img" onChange={debounce(setImg)} />
            </HStack>
            <HStack gap="4">
              <ArticleTypeSelect
                onChange={(arg) => {
                  setType([arg]);
                }}
              />
            </HStack>
          </VStack>
        }
      />
    </form>
  );
};
