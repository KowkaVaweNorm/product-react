import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-actions',
    '@storybook/addon-queryparams',
    '@chromatic-com/storybook',
    // {
    //   name: "@chromatic-com/storybook",
    //   options: {
    //     // 👇 Loads the configuration file based on the current environment
    //     configFile:
    //       process.env.NODE_ENV === "development"
    //         ? "chromatic.config.prod.json"
    //         : "chromatic.config.dev.json"
    //   }
    // }
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  docs: {},

  staticDirs: ['../../public'],
};
export default config;
