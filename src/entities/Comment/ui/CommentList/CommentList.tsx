import cls from './CommentList.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';
import { type Comment } from 'entities/Comment';
interface IProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: IProps): JSX.Element => {
  const {
    className,
    comments,
    isLoading
  } = props;
  const { t } = useTranslation();

  if (isLoading === true) {
      <div
          className={classNames(cls.commentlist ?? '', {}, [className, cls.loading])}>
          <CommentCard isLoading/>
          <CommentCard isLoading/>
          <CommentCard isLoading/>

      </div>;
  }

  return (
      <div
          className={classNames(cls.commentlist ?? '', {}, [className])}>
          {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          comments?.length
            ? comments.map((comment) =>
                <CommentCard
                    isLoading={isLoading}
                    className={cls.comment}
                    key={comment.id}
                    comment={comment}/>)
            : <Text text={t('Комментарии отсутствуют')} />
          }
      </div>
  );
});
