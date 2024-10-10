import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './ControlsAddBlock.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';

interface IProps {
  className?: string;
}
export const ControlsAddBlock = (props: IProps): JSX.Element => {
  const { t } = useTranslation('article-create');
  return (
    <div className={cls.wrapper_controls_add}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<>{t('In process')}</>}
        off={
          <HStack gap="8">
            <ButtonDeprecated theme={ButtonTheme.OUTLINE}>{t('Добавить текст')}</ButtonDeprecated>
            <ButtonDeprecated theme={ButtonTheme.OUTLINE}>
              {t('Добавить изображение')}
            </ButtonDeprecated>
            <ButtonDeprecated theme={ButtonTheme.OUTLINE}>{t('Добавить код')}</ButtonDeprecated>
          </HStack>
        }
      />
    </div>
  );
};
