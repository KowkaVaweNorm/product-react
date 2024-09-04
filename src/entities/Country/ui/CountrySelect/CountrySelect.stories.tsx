import { type StoryObj, type Meta } from '@storybook/react/*';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  args: {
    direction: 'bottom right',
  },
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;
export const Primary: Story = {};
