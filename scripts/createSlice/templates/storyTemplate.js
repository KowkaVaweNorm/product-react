module.exports = (layer, componentName) => `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ProfileCard> = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
      screenshot: {
        viewport: 'iPhone 5'
      }
    }
  };

  export default meta;
  type Story = StoryObj<typeof ProfileCard>
  export const Primary: Story = {
   
  };
`;



/**
 * import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/AvatarGuest-minify.jpg';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'Kowka',
      first: 'michael',
      city: 'Voronezh',
      currency: Currency.USD,
      avatar
    }
  }
};
 */