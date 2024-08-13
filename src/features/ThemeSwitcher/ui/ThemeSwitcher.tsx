import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleHandler}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
