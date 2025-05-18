import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleBlockType, ArticleView } from '../../../model/consts/articleConsts';
import { type ArticleTextBlock } from '../../../model/type/article';
import { type ArticleListItemProps } from '../ArticleListItem';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const userInfo = (
    <>
      <AppLink to={getRouteProfile(article.user.id)} className={cls.profile_link_avatar}>
        <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
      </AppLink>
      <AppLink to={getRouteProfile(article.user.id)} className={cls.profile_link_avatar}>
        <Text bold text={article.user.username} />
      </AppLink>
    </>
  );
  const views = (
    <HStack gap="8">
      <Icon Svg={EyeIcon} />
      <Text text={String(article.views ?? 0)} className={cls.views} />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        border="partial"
        padding="24"
        max
        data-testid="ArticleListItem"
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <VStack max gap="16">
          <HStack gap="8" max>
            {userInfo}
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} bold />
          <Text title={article.subtitle} size="s" />
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock?.paragraphs != null && (
            <Text className={cls.textBlock} text={textBlock.paragraphs.slice(0, 2).join(' ')} />
          )}
          <HStack max justify="between">
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button variant="outline">{t('Читать далее...')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      isBlock
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card} border="partial" padding="0">
        <AppImage
          errorFallback
          fallback={<Skeleton width="100%" height={200} />}
          alt={article.title}
          src={article.img}
          className={cls.img}
        />
        <VStack className={cls.info} gap="4">
          <Text title={article.title} className={cls.title} />
          <VStack gap="4" className={cls.footer} max>
            <HStack justify="between" max>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack gap="4" justify="start">
              {userInfo}
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});
