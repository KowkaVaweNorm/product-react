import cls from './CommentCard.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { type Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface IProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: IProps): JSX.Element => {
  const {
    className,
    comment,
    isLoading
  } = props;

  if (isLoading === true) {
    return <div
        className={classNames(cls.comment_card ?? '', {}, [className])}>
        <div className={cls.header}>
            <Skeleton border={'50%'} width={30} height={30}/>
            <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50}/>
    </div>;
  }

  return (
      <div
          className={classNames(cls.comment_card ?? '', {}, [className])}>
          <div className={cls.header}>
              { (comment.user.avatar !== undefined)
                ? <Avatar size={30} src={comment.user.avatar}/>
                : null}
              <Text className={cls.username} text={comment.user.username}/>
          </div>
          <Text className={cls.text} text={comment.text}/>

      </div>
  );
});
