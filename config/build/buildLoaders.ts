import type webpack from 'webpack';
import { type BuildOption } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
export function buildLoaders (options: BuildOption): webpack.RuleSetRule[] {
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const svgLoader = {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/
  // };
  const styleLoader = buildCssLoader(options.isDev);
  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    styleLoader
  ];
}
