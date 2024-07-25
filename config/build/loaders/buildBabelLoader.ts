import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { type BuildOption } from '../types/config';

interface BuildBabelLoaderProps extends BuildOption {
  isTsx?: boolean
}

export function buildBabelLoader ({ isDev, isTsx }: BuildBabelLoaderProps): object {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx
            }
          ],
          "@babel/plugin-transform-runtime",
          isTsx && !isDev && [
            babelRemovePropsPlugin(),
            {
              props: ['data-testid']
            }
          ],
          isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  };
}
