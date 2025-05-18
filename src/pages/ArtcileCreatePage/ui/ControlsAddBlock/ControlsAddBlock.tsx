import { useTranslation } from 'react-i18next';

import { useArticleCreateActions } from '../../model/slice/articleCreateSlice';

import { ArticleBlockType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface IProps {
  className?: string;
}
export const ControlsAddBlock = (props: IProps): JSX.Element => {
  const { t } = useTranslation('article-create');
  const { addBlock } = useArticleCreateActions();
  return (
    <div>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<>{t('In process')}</>}
        off={
          <HStack gap="8">
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              onClick={() => addBlock(ArticleBlockType.TEXT)}
            >
              {t('Добавить текст')}
            </ButtonDeprecated>
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              onClick={() => addBlock(ArticleBlockType.IMAGE)}
            >
              {t('Добавить изображение')}
            </ButtonDeprecated>
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              onClick={() => addBlock(ArticleBlockType.CODE)}
            >
              {t('Добавить код')}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </div>
  );
};
