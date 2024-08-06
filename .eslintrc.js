module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    // "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },

  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "kowka-vn-plugin",
    "unused-imports"
  ],

  rules: {
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "linebreak-style": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    'unused-imports/no-unused-imports': 'error',
    semi: ["error", "always"],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "react/display-name": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-tabs": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/restrict-template-expressions" : "off",
    "@typescript-eslint/explicit-function-return-type": "off",

    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
      },
    ],
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: [
          "data-testid", 
          "to", 
          "target", 
          "justify",
          "align",
          "direction",
          "gap",
          "as",
          "role",
          "border"
          "loading",
          "decoding"
        ],
      },
    ],
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 100,
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error",
    "kowka-vn-plugin/fsd-path-checker": ["error", {
      alias: '@'
    }],
    "kowka-vn-plugin/public-api-imports": ["error", {
      alias: '@',
      testFiles: ['**/*.test.*','**/*.stories.*', '**/StoreDecorator.tsx']
    }],
    "kowka-vn-plugin/layer-imports": ["error", {
      alias: '@',
      ignoreImportPatterns: ['**/StoreProvider', '**/testing']
    }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },

  overrides: [
    {
      files: ["*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
    {
      files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      rules: {
        "storybook/hierarchy-separator": "error",
        "storybook/default-exports": "off",
      },
    },
    {
      files: ["**/services/**/*.ts", "**/api/**/*.ts"], // Путь к вашим файлам в папке services
      rules: {
        "@typescript-eslint/no-invalid-void-type": "off", // Отключаем правило для этих файлов
      },
    },
  ],
};
