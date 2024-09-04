/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" />,
};
export const SizeS: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" size={'s'} />,
};
export const SizeM: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" size={'m'} />,
};
export const SizeL: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" size={'l'} />,
};

export const Error: Story = {
  render: () => <Text title="title lorem" text="text lorem ipsum tralalala" variant="error" />,
};

export const OnlyTitle: Story = {
  render: () => <Text title="Title lorem" />,
};
export const OnlyText: Story = {
  render: () => <Text text="Text lorem" />,
};
