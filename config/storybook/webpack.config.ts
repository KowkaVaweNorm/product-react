import path from 'path';
import { BuildPaths } from './../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    reports: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  };
  // @ts-ignore
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // Если убрать удаление и добавление лоадера свг, все сломается
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg/i };
    }
    return rule;
  });
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('http://localhost:6006'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );
  // Если убрать удаление и добавление лоадера свг, все сломается
  config.module?.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'removeAttrs',
                params: {
                  attrs: '(fill)',
                },
              },
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
            floatPrecision: 2,
          },
        },
      },
    ],
  });
  config.module?.rules?.push(buildCssLoader(true));
  return config;
};
