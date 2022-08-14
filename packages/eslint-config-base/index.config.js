module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['next', 'turbo'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**', 'test-dts/**'],
      rules: {
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
      },
    },
  ],
  ignorePatterns: [
    '*.config.js',
    '*.d.ts',
    '.eslintrc.js',
    '.vscode',
    '.idea',
    '.swc',
    '.next',
    '.turbo',
    '.cache',
    'node_modules',
    'cache',
    'dist',
    'build',
    'target',
    'out',
    'pkg',
    'npm',
    'public',
    'static',
  ],
};
