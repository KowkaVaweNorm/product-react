import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOption } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins ({ paths, isDev }: BuildOption): webpack.WebpackPluginInstance[] {
  const plugins = []
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }))
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new HtmlWebpackPlugin({
      template: paths.html
    }))
  }
  return plugins
}
