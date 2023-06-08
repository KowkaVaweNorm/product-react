import { CustomProjectConfig } from 'lost-pixel';
export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  pageShots: {
    pages: [
      {path: "/", name: 'main'},
      {path: "/about", name: 'about'}
    ],
    baseUrl: "http://localhost:6006"
  },
  generateOnly: true,
  failOnDifference: true,
};