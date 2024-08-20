import type { Meta, StoryObj } from '@storybook/react';
import { LoadingOverlay } from './LoadingOverlay';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'shared/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Loading: Story = {
  render: () => (
    <LoadingOverlay loading>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus nesciunt
        mollitia, architecto tempore cum blanditiis aliquid accusamus nulla porro perspiciatis quae
        tempora, totam at iusto culpa quia! Vero, laboriosam.
      </div>
    </LoadingOverlay>
  ),
};
