module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb'
    ],
    rules: {
        'linebreak-style': 'off',
        'global-require': 'off',
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        // 'max-len': ['error', { code: 400, tabWidth: 4 }],
        'fun-names': 'off',
        'prefer-arrow-callback': 'off',
        'no-return-await': 'off',
        'no-param-reassign': 'off',
        'import/no-named-as-default-member': 'off',
        'import/named': 'off',
        'consistent-return': 'off',
        'object-curly-newline': 'off',
        'dot-notation': 'off'
    }
}
