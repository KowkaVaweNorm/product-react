import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type BuildOption } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';
export function buildPlugins
({ paths, isDev, apiUrl,apiGCLUrl, project }: BuildOption): webpack.WebpackPluginInstance[] {
  const isProd = !isDev;
  const plugins = [
    /* Нужно синхронизовать с: 
     - eslint конфигом,
     - app/types/global.d.ts,
     - jest.config.ts 
     - config/storybook/webpack.config.ts
    */
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __API_GraphQL__: JSON.stringify(apiGCLUrl),
      __PROJECT__: JSON.stringify(project)
    }),

    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin()
    // TODO: Включить и проверить билд
    // new CircularDependencyPlugin({
    //   exclude: /node_modules/,
    //   failOnError: true
    // })
  ];

  if (isProd) {
    plugins.push(new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    }));

    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }));
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(paths.reports, 'bundleAnalyzer', 'analyze.html'),
    }));
  }

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }
  return plugins;
}
