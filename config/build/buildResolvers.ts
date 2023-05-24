import { type ResolveOptions } from 'webpack'
import { type BuildOption } from './types/config'

export function buildResolvers (options: BuildOption): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
