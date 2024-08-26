/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Tabs> = {
  title: 'shared/depreacated/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Light: Story = {
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

export const Dark: Story = {
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
