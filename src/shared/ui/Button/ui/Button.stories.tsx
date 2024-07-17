/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button>TEST</Button>
};
export const Clear: Story = {
  render: () => <Button theme={ButtonTheme.CLEAR}>TEST </Button>
};
export const ClearInverted: Story = {
  render: () => <Button theme={ButtonTheme.CLEAR_INVERTED}>TEST </Button>
};

// Outline

export const Outline: Story = {
  render: () => <Button theme={ButtonTheme.OUTLINE}>TEST </Button>
};
export const OutlineDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <Button theme={ButtonTheme.OUTLINE}>TEXT</Button>
};

export const OutlineSizeM: Story = {
  render: () => <Button
      theme={ButtonTheme.OUTLINE}
      size={ButtonSize.M}
  >TEST </Button>
};
export const OutlineSizeL: Story = {
  render: () => <Button
      theme={ButtonTheme.OUTLINE}
      size={ButtonSize.L}
  >TEST </Button>
};
export const OutlineSizeXL: Story = {
  render: () => <Button
      theme={ButtonTheme.OUTLINE}
      size={ButtonSize.XL}
  >TEXT </Button>
};
// Background
export const BackgroundTheme: Story = {
  render: () => <Button theme={ButtonTheme.BACKGROUND}>TEXT </Button>
};
export const BackgroundInvertedTheme: Story = {
  render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED}>TEXT </Button>
};

// Squary
export const Square: Story = {
  render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED}
      square={true}>{'>'}</Button>
};
export const SquareSizeL: Story = {
  render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED}
      square={true} size={ButtonSize.L}>{'>'}</Button>
};
export const SquareSizeXL: Story = {
  render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED}
      square={true} size={ButtonSize.XL}>{'>'}</Button>
};
export const Disabled: Story = {
  render: () => <Button theme={ButtonTheme.OUTLINE}
      disabled = {true}>{'>'}</Button>
};
