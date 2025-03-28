module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'react-hooks'],
    extends: [
        'airbnb-typescript',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    env: {
        es6: true,
        browser: true,
        node: true
    },
    rules: {
        camelcase: 0,
        'no-console': 0,
        'no-debugger': 0,
        'no-unused-vars': 0,
        'no-underscore-dangle': 0,
        'no-extend-native': 0,
        'no-restricted-syntax': 0,
        'no-prototype-builtins': 0,
        'no-template-curly-in-string': 0, // For Formik error message template
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['draft', 'ref'] }
        ],
        'func-names': 0,
        'arrow-body-style': 0,
        'dot-notation': 0,
        'object-curly-newline': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/tabindex-no-positive': 0,
        'jsx-a11y/no-noninteractive-tabindex': 0,
        'prefer-destructuring': 0,
        'prefer-arrow-callback': 0,

        'react/prop-types': 0,
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/no-danger': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/prefer-stateless-function': 0,
        'react/no-array-index-key': 0,
        'react/forbid-prop-types': 0,
        'react/require-default-props': 0,
        'react/no-unused-prop-types': 0,
        'react/no-did-mount-set-state': 0,
        'react/jsx-fragments': 0,
        'react/static-property-placement': 0,
        'react/state-in-constructor': 0,
        'react/jsx-props-no-spreading': [
            1,
            {
                html: 'enforce',
                custom: 'ignore'
            }
        ],
        'react/no-did-update-set-state': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unused-state': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/sort-comp': 0,
        'react/no-find-dom-node': 0,
        'react/display-name': 0,
        'react/button-has-type': 0,
        'react/jsx-one-expression-per-line': 0,

        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-cycle': 0,

        'prettier/prettier': 0
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 0,
                '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
                '@typescript-eslint/ban-ts-comment': 0,
                '@typescript-eslint/no-use-before-define': ['error', { functions: false }]
            }
        }
    ]
};
