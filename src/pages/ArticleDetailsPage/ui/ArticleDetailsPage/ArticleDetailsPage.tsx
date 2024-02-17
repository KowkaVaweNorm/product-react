import { ArticleDetails, ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ArticleDetailsPage.module.scss';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
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
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
import { Page } from 'widgets/Page/ui/Page';
import {
  getArticlePageRecommendations
} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import {
  fetchArticleRecommendation
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';

const reducer: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
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
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticlePageRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    console.log('text for comment:', text);
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  // const commentsError = useSelector(getArticleCommentsError);
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId ?? id));
    dispatch(fetchArticleRecommendation());
  });
  if (id === undefined && articleId === undefined) {
    return (
        <Page className={(classNames(cls.article_details_page ?? '', {}, [className]))}>
            {t('Статья не найдена')}
        </Page>
    );
  }
  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
          <Page className={(classNames(cls.article_details_page ?? '', {}, [className]))}>
              <Button
                  onClick={onBackToList}
                  theme={ButtonTheme.OUTLINE}>
                  {t('Назад к списку')}
              </Button>
              <ArticleDetails id={id ?? articleId ?? '1'}/>
              <Text
                  size={TextSize.L}
                  title={t('Рекоммендации')}
                  className={cls.comment_title}/>
              <ArticleList
                  articles={recommendations}
                  isLoading={recommendationsIsLoading}
                  className={cls.recommendations}
                  target='_blank'/>
              <Text
                  size={TextSize.L}
                  title={t('Комментарии')}
                  className={cls.comment_title}/>
              <AddCommentForm onSendComment={onSendComment} />
              <CommentList
                  isLoading={commentsIsLoading}
                  comments={comments}
            />
          </Page>
      </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
