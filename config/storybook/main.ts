import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    '@storybook/addon-actions',
    '@storybook/addon-queryparams'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: { }
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../../public']
};
export default config;
