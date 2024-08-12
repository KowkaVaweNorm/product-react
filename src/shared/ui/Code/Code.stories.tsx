/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
  render: () => (
    <Code
      text={
        '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
      }
    />
  ),
};

export const Dark: Story = {
  decorators: [(Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story)],
  render: () => (
    <Code
      text={
        '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
      }
    />
  ),
};
