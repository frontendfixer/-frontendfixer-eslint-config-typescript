require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2020: true,
    jquery: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },

  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'react-refresh',
    'simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'plugin:prettier/recommended',
    './rules/base.rules.js',
    './rules/typescript.rules.js',
  ],
};
