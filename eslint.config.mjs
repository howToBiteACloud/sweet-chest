import nx from '@nx/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

export default [
    ...nx.configs['flat/base'],
    ...nx.configs['flat/typescript'],
    ...nx.configs['flat/javascript'],
    {
        ignores: ['**/dist', '.angular', '.nx', '**/node_modules/**'],
    },
    {
        files: [
            '**/*.ts',
            '**/*.tsx',
            '**/*.js',
            '**/*.jsx',
            '**/*.cjs',
            '**/*.mjs',
        ],
        plugins: {
            import: importPlugin,
            'unused-imports': unusedImportsPlugin,
            'simple-import-sort': simpleImportSortPlugin,
        },
        rules: {
            'object-shorthand': ['error', 'always'],
            curly: ['error'],
            'no-redeclare': ['error'],
            quotes: ['error', 'single'],
            'keyword-spacing': ['error', { after: true }],
            eqeqeq: ['error'],
            'no-unreachable': ['error'],
            'prefer-const': ['error'],
            'import/order': ['error'],
            'unused-imports/no-unused-imports': 'error',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
    ...nx.configs['flat/angular'],
    ...nx.configs['flat/angular-template'],
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': ['error', { parser: 'angular', tabWidth: 4 }],
        },
    },
];
