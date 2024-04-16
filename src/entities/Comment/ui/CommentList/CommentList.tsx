import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';
import { type Comment } from '../../model/types/comment';
import { VStack } from 'shared/ui/Stack';
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
      <VStack
          gap='16'
          max
          className={classNames('', {}, [className])}>
          <CommentCard isLoading/>
          <CommentCard isLoading/>
          <CommentCard isLoading/>

      </VStack>;
  }

  return (
      <VStack
          gap='16'
          max
          className={classNames('', {}, [className])}>
          {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          comments?.length
            ? comments.map((comment) =>
                <CommentCard
                    isLoading={isLoading}
                    key={comment.id}
                    comment={comment}/>)
            : <Text text={t('Комментарии отсутствуют')} />
          }
      </VStack>
  );
});
