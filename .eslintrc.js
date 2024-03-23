module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/prettier',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['testing-library', 'react'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off', // until we go through codebase and properly type functions,
    'prefer-spread': 'off',
    'no-prototype-builtins': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
    commonjs: true,
  },
  overrides: [
    {
      files: '*.mdx',
      extends: 'plugin:mdx/recommended',
    },
  ],
};
