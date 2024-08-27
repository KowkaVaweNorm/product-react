import cls from './CommentCard.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { type Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface IProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: IProps): JSX.Element | null => {
  const { className, comment, isLoading } = props;
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });
  if (isLoading ?? false) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" border="partial" fullWidth className={cls.CardRedesigned}>
            <VStack
              data-testid="CommentCard.Content"
              gap="8"
              max
              className={classNames('', {}, [className])}
            >
              <div className={cls.header}>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton height={16} width={100} className={cls.username} />
              </div>
              <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
          </Card>
        }
        off={
          <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
          >
            <div className={cls.header}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton height={16} width={100} className={cls.username} />
            </div>
            <Skeleton className={cls.text} width="100%" height={50} />
          </VStack>
        }
      />
      // <VStack
      //   data-testid="CommentCard.Loading"
      //   gap="8"
      //   max
      //   className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      // >
      //   <div className={cls.header}>
      //     <Skeleton width={30} height={30} border="50%" />
      //     <Skeleton height={16} width={100} className={cls.username} />
      //   </div>
      //   <Skeleton className={cls.text} width="100%" height={50} />
      // </VStack>
    );
  }

  if (comment == null) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" border="partial" fullWidth className={cls.CardRedesigned}>
          <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames('', {}, [className])}
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack gap="8">
                {comment.user.avatar !== undefined ? (
                  <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text text={comment.user.username} bold />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          data-testid="CommentCard.Content"
          gap="8"
          max
          className={classNames(cls.CommentCard, {}, [className])}
        >
          <AppLinkDeprecated to={getRouteProfile(comment.user.id)} className={cls.header}>
            {comment.user.avatar !== undefined ? (
              <AvatarDeprecated size={30} src={comment.user.avatar} />
            ) : null}
            <TextDeprecated className={cls.username} title={comment.user.username} />
          </AppLinkDeprecated>
          <TextDeprecated className={cls.text} text={comment.text} />
        </VStack>
      }
    />
  );
});
