import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleBlockType } from '../../../model/consts/articleConsts';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'entities/Article/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {
  args: {
    block: {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
  },
};
