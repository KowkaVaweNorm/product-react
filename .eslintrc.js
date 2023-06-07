module.exports = {
 
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  
  settings: {
    react: {
      version: 'detect'
    }
  },
  
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "plugin:@typescript-eslint/recommended",
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  
  parser: '@typescript-eslint/parser',
  
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname
  },

  plugins: ['react', '@typescript-eslint', "i18next"],
  
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    "@typescript-eslint/restrict-plus-operands": "warn",
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    "i18next/no-literal-string": ['error', {
      markupOnly: true
    }],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }],
    'max-len': ['error', {
      ignoreComments: true,
      code: 100
    }]
  },
  globals: {
    __IS_DEV__: true
  },

  overrides: [
    {
      files: ['*.test.{ts|tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off',
      }
    }
  ]


};