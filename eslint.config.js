import js from '@eslint/js';
import globals from 'globals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  // 1. Global ignores must be the first object in the array
  { ignores: ['dist'] },

  // 2. Standard recommended JS rules
  js.configs.recommended,

  // 3. Your Custom Configuration
  {
    files: ['**/*.{js,jsx}'], // Ensure this matches your file extensions!
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // The rules causing the issue
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      
      // Your other rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
];