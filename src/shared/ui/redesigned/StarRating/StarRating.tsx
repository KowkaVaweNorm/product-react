import { memo, useState } from 'react';

import cls from './StarRating.module.scss';
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon';
import { Icon } from '../Icon';

import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          off: () => cls.StarRating,
          on: () => cls.StarRatingRedesigned,
        }),
        {},
        [className],
      )}
    >
      {stars.map((starNumber) => {
        const commonProps = {
          className: classNames(cls.starIcon, { [cls.selected ?? '']: isSelected }, [
            currentStarsCount >= starNumber ? cls.hovered : cls.normal,
          ]),
          Svg: StarIcon,
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(starNumber),
          onClick: onClick(starNumber),
          'data-testid': `StarRating.${starNumber}`,
          'data-selected': currentStarsCount >= starNumber,
        };
        return (
          <ToggleFeatures
            key={String(starNumber) + '_ToggleFeatures'}
            feature="isAppRedesigned"
            on={<Icon clickable={!isSelected} key={starNumber} {...commonProps} />}
            off={<IconDeprecated key={starNumber} {...commonProps} />}
          />
        );
      })}
    </div>
  );
});
