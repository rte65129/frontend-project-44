import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [{
  files: ['**/*.js'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: { ...globals.node },
  },
  plugins: { stylistic },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'arrow-body-style': 'off',
    'stylistic/indent': ['error', 2],
    'stylistic/array-bracket-newline': ['error', { minItems: 3 }],
    'stylistic/array-element-newline': ['error', { minItems: 3 }],
    'stylistic/arrow-parens': ['error', 'always'],
    'stylistic/comma-dangle': ['error', 'always-multiline'],
    'stylistic/eol-last': ['error', 'always'],
    'stylistic/max-len': ['error', { code: 100, ignoreUrls: true }],
    'stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'stylistic/no-trailing-spaces': 'error',
    'stylistic/object-curly-newline': ['error', { multiline: true, minProperties: 3 }],
    'stylistic/object-curly-spacing': ['error', 'always'],
    'stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'stylistic/quote-props': ['error', 'consistent-as-needed'],
    'stylistic/quotes': [
      'error',
      'single',
      { avoidEscape: true },
    ],
    'stylistic/semi': ['error', 'never'],
  },
}]
