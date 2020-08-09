module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  // add your custom rules here
  rules: {
    'react/prop-types': 1,
    'simple-import-sort/sort': 'error',
  },
};
