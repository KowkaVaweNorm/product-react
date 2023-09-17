import type webpack from 'webpack';
import { type BuildOption } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
export function buildLoaders (options: BuildOption): webpack.RuleSetRule[] {
  const babelLoader = buildBabelLoader(options);
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };
  const styleLoader = buildCssLoader(options.isDev);
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    styleLoader
  ];
}
