import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useCallback } from 'react';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface IArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: IArticleDetailsPageHeaderProps): JSX.Element => {
    const { className } = props;
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);
    const onEditArticle = useCallback(() => {
      navigate(getRouteArticleEdit(article?.id ?? ''));
    }, [article?.id, navigate]);
    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
          {t('Назад к списку')}
        </Button>
        {canEdit && (
          <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
            {t('Редактировать')}
          </Button>
        )}
      </HStack>
    );
  },
);
