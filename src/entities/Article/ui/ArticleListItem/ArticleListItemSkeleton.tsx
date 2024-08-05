import cls from './ArticleListItem.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import {
  ArticleView
} from '../../model/type/article';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

interface IArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps): JSX.Element => {
  const {
    className,
    view
  } = props;

  if (view === ArticleView.BIG) {
    return (
        <div
            className={
                classNames(cls.article_list_item ?? '', {}, [className, cls[view]])
            }>
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'}
                        className={classNames(cls.img ?? '', {}, [cls.skeleton])}/>
                    <Skeleton width={150} height={16} className={cls.username} />
                    <Skeleton width={150} height={16} className={cls.date}/>
                </div>
                <Skeleton width={250} height={24} className={cls.title} />
                <Skeleton height={200}
                    className={classNames(cls.img ?? '', {}, [cls.skeleton])} />
                <div className={cls.footer}>
                    <Skeleton height={36} width={200} />

                </div>
            </Card>
        </div>
    );
  }
  return (
      <div
          className={classNames(cls.article_list_item ?? '', {}, [className, cls[view]])}
      >
          <Card>
              <div className={cls.imageWrapper}>
                  <Skeleton
                      width={200}
                      height={200}
                      className={classNames(cls.img ?? '', {}, [cls.skeleton])}/>
              </div>
              <div className={cls.infoWrapper}>
                  <Skeleton width={130} height={16} />
              </div>
              <Skeleton width={150} height={16} className={cls.title}/>
          </Card>
      </div>
  );
});
