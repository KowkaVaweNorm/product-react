import cls from './ArticleListItem.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { memo, useCallback } from 'react';
import {

  ArticleVew,
  type Article,
  ArticleBlockType,
  type ArticleTextBlock
} from '../../model/type/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
interface IArticleListItemProps {
  className?: string
  article: Article
  view: ArticleVew
}

export const ArticleListItem = memo((props: IArticleListItemProps): JSX.Element => {
  const {
    className,
    article,
    view
  } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = <Text
      text={article.type.join(', ')}
      className={cls.types}/>;

  const views = (
      <>
          <Text text={String(article.views)} className={cls.views}/>
          <Icon Svg={EyeIcon}/>
      </>
  );
  if (view === ArticleVew.BIG) {
    const textBlock =
    article.blocks.find(
      item => item.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
        <div
            className={
                classNames(cls.article_list_item ?? '', {}, [className, cls[view]])
            }>
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar}/>
                    <Text title={article.user.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <Text title={article.title} className={cls.title} />
                {types}
                <img
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                    loading='lazy'
                    decoding='async' />
                {
                textBlock !== undefined &&
                <ArticleTextBlockComponent
                    block={textBlock}
                    className={cls.textBlock}/>
                }
                <div className={cls.footer}>
                    <Button
                        onClick={onOpenArticle}
                        theme={ButtonTheme.OUTLINE}>
                        {t('Читать далее...')}
                    </Button>
                    {views}
                </div>
            </Card>
        </div>
    );
  }
  return (
      <div
          className={classNames(cls.article_list_item ?? '', {}, [className, cls[view]])}
      >
          <Card
              onClick={onOpenArticle}>
              <div className={cls.imageWrapper}>
                  <img src={article.img} alt={article.title} className={cls.img}/>
                  <Text text={article.createdAt} className={cls.date}/>
              </div>
              <div className={cls.infoWrapper}>
                  {types}
                  {views}
              </div>
              <Text text={article.title} className={cls.title}/>
          </Card>
      </div>
  );
});
