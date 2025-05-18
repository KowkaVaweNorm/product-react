import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/redesigned/Text';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!(isArticlesPageWasOpened ?? false)) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const onClose = () => {
    setIsOpen(false);
  };

  const text = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Text
          title={t('Добро пожаловать на страницу статей')}
          text={t('Здесь вы можете искать и просматривать статьи на различные темы')}
        />
      }
      off={
        <TextDeprecated
          title={t('Добро пожаловать на страницу статей')}
          text={t('Здесь вы можете искать и просматривать статьи на различные темы')}
        />
      }
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
