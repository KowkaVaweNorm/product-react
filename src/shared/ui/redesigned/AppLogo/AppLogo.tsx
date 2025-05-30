import { memo } from 'react';

import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';

import AppSvg from '@/shared/assets/icons/circle-icon-app.svg';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack max justify="center" className={classNames(cls.appLogoWrapper, {}, [className])}>
      <AppSvg width={size} height={size} color="black" className={cls.appLogo} />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
