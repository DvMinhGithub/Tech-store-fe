module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '^18.3.0'
    }
  },
  plugins: ['react-refresh', 'simple-import-sort', 'prettier', 'unused-imports'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: true,
        semi: false,
        quoteProps: 'as-needed',
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: 'css',
        vueIndentScriptAndStyle: false,
        proseWrap: 'preserve',
        tabWidth: 2,
        useTabs: false,
        embeddedLanguageFormatting: 'auto',
        endOfLine: 'auto'
      }
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?w'],
          ['^(@|src)(/.*|$)'],
          ['^u0000'],
          ['^..(?!/?$)', '^../?$'],
          ['^./(?=.*/)(?!/?$)', '^.(?!/?$)', '^./?$'],
          ['^.+.?(css)$']
        ]
      }
    ]
  }
}
