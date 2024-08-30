import type webpack from 'webpack';
import { type BuildOption } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
export function buildLoaders (options: BuildOption): webpack.RuleSetRule[] {
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const svgLoader = {
    test: /\.svg$/,
    use: [{
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
                    }
                }
                ],
                floatPrecision: 2,
            }
        }
    }],
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
  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
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
