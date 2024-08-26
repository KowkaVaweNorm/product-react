/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
};

const stubText =
  '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;';

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
  decorators: [FeaturesFlagsDecorator({ isAppRedesigned: true })],
  render: () => <Code text={stubText} />,
};
export const LightDeprecated: Story = {
  decorators: [FeaturesFlagsDecorator({ isAppRedesigned: false })],
  args: {
    text: stubText,
  },
};

export const Dark: Story = {
  decorators: [FeaturesFlagsDecorator({ isAppRedesigned: true })],
  args: {
    text: stubText,
  },
};
export const DarkDeprecated: Story = {
  decorators: [FeaturesFlagsDecorator({ isAppRedesigned: false })],
  args: {
    text: stubText,
  },
};
