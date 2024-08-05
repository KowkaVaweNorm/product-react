import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  return (

      <Button
          theme = {ButtonTheme.CLEAR}
          className={classNames('', {}, [className])}
          onClick={toggleTheme}
            >
          {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
      </Button>
  );
});
