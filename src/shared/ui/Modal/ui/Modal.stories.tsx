import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  render: () => (
    <Modal isOpen={true}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit necessitatibus eum
      aliquam praesentium illum eligendi soluta, expedita maxime quam qui, eaque reiciendis, dolores
      modi iusto! Aliquam laudantium dicta in vero.
    </Modal>
  ),
};
export const PrimaryDark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  render: () => (
    <Modal isOpen={true}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit necessitatibus eum
      aliquam praesentium illum eligendi soluta, expedita maxime quam qui, eaque reiciendis, dolores
      modi iusto! Aliquam laudantium dicta in vero.
    </Modal>
  ),
};
