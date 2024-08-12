/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import path from 'path';
import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, type BuildEnv, type BuildPaths } from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl;
  }
  if (mode === 'production') {
    return '/api';
  }

  return 'http://localhost:8000';
}
export default (env: BuildEnv): object => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };
  // .? - Для Cypress, иначе он не видит переменных окружения
  const mode = env?.mode || 'development';
  const PORT = env?.port || 3002;
  const apiUrl = getApiUrl(mode, env?.apiUrl);

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
