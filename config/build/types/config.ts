
export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  reports: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
  apiGCLUrl: string
}

export interface BuildOption {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  /**
   * Rest URl
   */
  apiUrl: string
  /**
   * GraphQL URl
   */
  apiGCLUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}
