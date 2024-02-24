import { CustomProjectConfig } from 'lost-pixel';
  // @ts-ignore
    export const config: CustomProjectConfig = {
      storybookShots: {
        storybookUrl: './storybook-static',
      },
      waitBeforeScreenshot: 2000,
      lostPixelProjectId: 'clip35ifygwtdn70eekz2xjoj',
      apiKey: process.env.LOST_PIXEL_API_KEY,
    };