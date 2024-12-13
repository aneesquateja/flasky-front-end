module.exports = {
  root: true,
  env: { 
    browser: true,
    es2020: true,
    'vitest-globals/env': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:vitest-globals/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react-refresh/only-export-components": ["warn", {
      allowConstantExport: true,
    }],
    "max-len": [1, 120, 2, { "ignoreComments": true }],
    "no-console": "off",
    quotes: ["error", "single", {
      allowTemplateLiterals: true,
      avoidEscape: true,
    }],
    "camelcase": ["error", { "properties": "always" }],
    "semi": ["warn", "always"],
    "comma-dangle": ["warn", "only-multiline"],
    "dot-notation": "warn",
    "space-before-function-paren": "off",
    "indent": ["warn", 2],
    "padded-blocks": "warn",
    "no-trailing-spaces": "warn",
    "array-bracket-spacing": "warn",
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "padded-blocks": ["error", "never"],
    "no-var": "error",
  },
}

