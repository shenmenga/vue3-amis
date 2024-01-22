module.exports = {
    root: true,
    extends: [require.resolve('@q-front-npm-configs/eslint/eslint-tslib'), require.resolve('@q-front-npm-configs/eslint/eslint-vue')],
    rules: {
        // 在定义对象或数组时，最后一项不能加逗号
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'always',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            }
        ],
        // 对象括号添加空格
        'object-curly-spacing': ['error', 'always'],
        // Vue 模板文件中双花括号 {{}} 添加空格
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        // 类型冒号后加空格
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                before: false,
                after: true,
                overrides: {
                    arrow: {
                        before: true,
                        after: true,
                    },
                },
            }
        ],
        'max-len': [2, 500],
        // 非空断言
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
};
