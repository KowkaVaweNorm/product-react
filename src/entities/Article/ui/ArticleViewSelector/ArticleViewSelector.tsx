import cls from './ArticleViewSelector.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { ArticleView } from '../../model/type/article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

interface IArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick: (view: ArticleView) => void
}

export const ArticleViewSelector = memo((props: IArticleViewSelectorProps): JSX.Element => {
  const {
    className,
    onViewClick,
    view
  } = props;

  const viewsTypes = [
    {
      view: ArticleView.SMALL,
      icon: TiledIcon
    },
    {
      view: ArticleView.BIG,
      icon: ListIcon
    }
  ];

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
      <div
          className={classNames(cls.article_view_selector ?? '', {}, [className])}
      >
          {
          viewsTypes.map(viewItem => (
              <Button
                  theme={ButtonTheme.CLEAR}
                  key={viewItem.view}
                  onClick={onClick(viewItem.view)}>
                  <Icon
                      className={
                      classNames('', { [cls.notSelected ?? '']: viewItem.view !== view }, [])
                    }
                      Svg={viewItem.icon}/>
              </Button>
          ))
        }
      </div>
  );
});
