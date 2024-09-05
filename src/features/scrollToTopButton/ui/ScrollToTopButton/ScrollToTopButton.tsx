import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const onCLick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Icon
      Svg={CircleIcon}
      clickable
      onClick={onCLick}
      width={32}
      height={32}
      classnamebutton={classNames(cls.BtnIcon, { [cls.visible ?? '']: isVisible }, [])}
      className={classNames(cls.ScrollToTopButton, {}, [className])}
    />
  );
});
