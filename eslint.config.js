export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    // Исключаем файл конфигурации из проверки linebreak-style
    files: ['eslint.config.js'],
    rules: {
      '@stylistic/linebreak-style': 'off'
    }
  },
  {
    ignores: ['node_modules', 'dist', 'coverage'],
  },
]