import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader (isDev: boolean): object[] {
  return [{
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev
        ? 'style-loader'
        : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  },
  {
    // Для обработки импортов css для библиотек внешних
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  }];
}
