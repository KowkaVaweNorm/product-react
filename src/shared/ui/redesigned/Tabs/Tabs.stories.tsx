/* eslint-disable i18next/no-literal-string */
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  render: () => (
    <Tabs
      tabs={[
        {
          content: 'tab1',
          value: 'tab2',
        },
        {
          content: 'tab-content2',
          value: 'tab_index2',
        },
        {
          content: 'tab-content3',
          value: 'tab_index3',
        },
      ]}
      value={'tab2'}
      onTabClick={action('onTabClick')}
    />
  ),
};
export const PrimaryWithoutValue: Story = {
  render: () => (
    <Tabs
      tabs={[
        {
          content: 'tab1',
          value: 'tab2',
        },
        {
          content: 'tab-content2',
          value: 'tab_index2',
        },
        {
          content: 'tab-content3',
          value: 'tab_index3',
        },
      ]}
    />
  ),
};
