import cls from './ArticleViewSelector.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface IArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
];
export const ArticleViewSelector = memo((props: IArticleViewSelectorProps): JSX.Element => {
  const { className, onViewClick, view } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
          border="round"
        >
          <HStack gap="8">
            {viewTypes.map((viewType) => {
              return (
                <Icon
                  clickable
                  key={viewType.view}
                  onClick={onClick(viewType.view)}
                  Svg={viewType.icon}
                  className={classNames(cls.Icon, {
                    [cls.Selected ?? '']: viewType.view === view,
                  })}
                />
              );
            })}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.NotSelected ?? '']: viewType.view !== view,
                })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});
