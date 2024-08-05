import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Input } from '@/shared/ui/Input';
import { Drawer } from '@/shared/ui/Drawer';
import { Button, ButtonTheme, ButtonSize } from '@/shared/ui/Button';

import { Modal } from '@/shared/ui/Modal';

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback = false,
    onCancel,
    title,
    rate = 0
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
      <>
          <Text
              title={feedbackTitle}
            />
          <Input
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Ваш отзыв')}
            />
      </>
  );

  return (
      <Card className={className} max>
          <VStack align="center" gap="8" max>
              <Text title={starsCount > 0 ? t('Спасибо за оценку!') : title} />
              <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
          </VStack>
          <BrowserView>
              <Modal isOpen={isModalOpen} lazy>
                  <VStack max gap="32">
                      {modalContent}
                      <HStack max gap="16" justify="end">
                          <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                              {t('Закрыть')}
                          </Button>
                          <Button theme={ButtonTheme.OUTLINE} onClick={acceptHandle}>
                              {t('Отправить')}
                          </Button>
                      </HStack>
                  </VStack>
              </Modal>
          </BrowserView>
          <MobileView>
              <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                  <VStack gap="32">
                      {modalContent}
                      <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                          {t('Отправить')}
                      </Button>
                  </VStack>
              </Drawer>
          </MobileView>
      </Card>
  );
});
