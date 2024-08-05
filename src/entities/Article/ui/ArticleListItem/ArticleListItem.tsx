import cls from "./ArticleListItem.module.scss";
import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import { type HTMLAttributeAnchorTarget, memo } from "react";
import {
  ArticleView,
  type Article,
  ArticleBlockType,
  type ArticleTextBlock
} from "../../model/type/article";
import { Text } from "@/shared/ui/Text";
import { Icon } from "@/shared/ui/Icon";
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import { Card } from "@/shared/ui/Card";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent";
import { AppLink } from "@/shared/ui/AppLink";
import { getRouteArticleDetails } from "@/shared/const/router";
interface IArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo(
  (props: IArticleListItemProps): JSX.Element => {
    const { className, article, view, target } = props;
    const { t } = useTranslation("article");

    const types = <Text text={article.type.join(", ")} className={cls.types} />;

    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (item) => item.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;
      return (
          <div
              className={classNames(cls.article_list_item ?? "", {}, [
                className,
                cls[view]
              ])}
        >
              <Card className={cls.card}>
                  <div className={cls.header}>
                      <Avatar size={30} src={article.user.avatar} />
                      <Text title={article.user.username} className={cls.username} />
                      <Text text={article.createdAt} className={cls.date} />
                  </div>
                  <Text title={article.title} className={cls.title} />
                  {types}
                  <img
                      src={article.img}
                      alt={article.title}
                      className={cls.img}
                      loading="lazy"
                      decoding="async"
            />
                  {textBlock !== undefined && (
                  <ArticleTextBlockComponent
                      block={textBlock}
                      className={cls.textBlock}
              />
                  )}
                  <div className={cls.footer}>
                      <AppLink
                          target={target}
                          to={getRouteArticleDetails(article.id)}
              >
                          <Button theme={ButtonTheme.OUTLINE}>
                              {t("Читать далее...")}
                          </Button>
                      </AppLink>
                      {views}
                  </div>
              </Card>
          </div>
      );
    }
    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.article_list_item ?? "", {}, [
              className,
              cls[view]
            ])}
      >
            <Card>
                <div className={cls.image_wrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.info_wrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
  }
);
