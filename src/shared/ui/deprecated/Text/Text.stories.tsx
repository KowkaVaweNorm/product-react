/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/depreacated/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" />,
};
export const SizeS: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" size={TextSize.S} />,
};
export const SizeM: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" size={TextSize.M} />,
};
export const SizeL: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" size={TextSize.L} />,
};

export const Error: Story = {
  render: () => (
    <Text title="title lorem" text="text lorem ipsum tralalala" theme={TextTheme.ERROR} />
  ),
};

export const OnlyTitle: Story = {
  render: () => <Text title="Title lorem" />,
};
export const OnlyText: Story = {
  render: () => <Text text="Text lorem" />,
};
export const PrimaryDark: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" />,
};

export const OnlyTitleDark: Story = {
  render: () => <Text title="Title lorem" />,
};
export const OnlyTextDark: Story = {
  render: () => <Text text="Text lorem" />,
};
