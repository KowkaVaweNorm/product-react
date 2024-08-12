// eslint-disable-next-line kowka-vn-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { type Theme } from '@/shared/const/theme';
import { type StoryFn } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
