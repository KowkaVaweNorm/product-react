import type webpack from 'webpack'
import { type BuildOption } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
export function buildLoaders ({ isDev }: BuildOption): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
  const styleLoader = buildCssLoader(isDev)
  return [
    fileLoader,
    svgLoader,
    typescriptLoader,
    styleLoader
  ]
}
