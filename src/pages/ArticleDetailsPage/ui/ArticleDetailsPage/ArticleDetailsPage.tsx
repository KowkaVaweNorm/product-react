import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentReducer,
  getArticleComments
} from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { useCallback } from 'react';
import {
  addCommentForArticle
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';

const reducer: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer
};

interface IProps {
  articleId?: string
  className?: string
}

const ArticleDetailsPage = (props: IProps): JSX.Element => {
  const {
    className = '',
    articleId
  } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    console.log('text for comment:', text);
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  // const commentsError = useSelector(getArticleCommentsError);
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId ?? id));
  });
  if (id === undefined && articleId === undefined) {
    return (
        <div className={(classNames(cls.article_details_page ?? '', {}, [className]))}>
            {t('Статья не найдена')}
        </div>
    );
  }
  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
          <div className={(classNames(cls.article_details_page ?? '', {}, [className]))}>
              <ArticleDetails id={id}/>
              <Text title={t('Комментарии')} className={cls.comment_title}/>
              <AddCommentForm onSendComment={onSendComment} />
              <CommentList
                  isLoading={commentsIsLoading}
                  comments={comments}
          />
          </div>
      </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
