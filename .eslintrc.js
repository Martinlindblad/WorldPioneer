module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'class-methods-use-this': ['off'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-danger': ['off'],
    'react/require-default-props': [
      'error',
      {ignoreFunctionalComponents: true, forbidDefaultForRequired: true},
    ],
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
  },
};
