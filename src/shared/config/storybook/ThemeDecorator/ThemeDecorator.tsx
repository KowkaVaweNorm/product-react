// eslint-disable-next-line kowka-vn-plugin/layer-imports
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { type StoryFn } from '@storybook/react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (StoryComponent: StoryFn, context: any) => {
  const themeName = context.globals.theme as keyof typeof Theme;
  const { setTheme } = useTheme();
  const [themeClassName, setThemeClassName] = useState(Theme.LIGHT);
  useEffect(() => {
    switch (themeName) {
      case 'LIGHT':
        setThemeClassName(Theme.LIGHT);
        setTheme?.(Theme.LIGHT);
        break;
      case 'DARK':
        setThemeClassName(Theme.DARK);
        setTheme?.(Theme.DARK);
        break;
      case 'ORANGE':
        setThemeClassName(Theme.ORANGE);
        setTheme?.(Theme.ORANGE);
        break;
      default:
        setTheme?.(Theme.LIGHT);
        break;
    }
  }, [themeName]);
  return (
    <div className={`app ${themeClassName}`} key={themeClassName}>
      <StoryComponent />
    </div>
  );
};
