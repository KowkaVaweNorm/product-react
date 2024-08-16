import cls from './CommentCard.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { type Comment } from '../../model/types/comment';
import { Text } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface IProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: IProps): JSX.Element | null => {
  const { className, comment, isLoading } = props;

  if (isLoading === true) {
    return (
      <VStack
        data-testid={'CommentCard.Loading'}
        max
        gap="8"
        className={classNames(cls.comment_card ?? '', {}, [className])}
      >
        <div className={cls.header}>
          <Skeleton border={'50%'} width={30} height={30} />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50} />
      </VStack>
    );
  }
  if (comment === undefined) {
    return null;
  }

  return (
    <VStack
      data-testid={'CommentCard.Content'}
      max
      gap="8"
      className={classNames(cls.comment_card ?? '', {}, [className])}
    >
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar !== undefined ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={cls.username} text={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  );
});
