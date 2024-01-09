/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
    },
    rules: {
        // 要求使用 === 和 !==
        eqeqeq: 'error',
        // 强制switch要有default分支
        'default-case': 'error',
        // 禁止出现多行字符串，可以使用模板字符串换行
        'no-multi-str': 'error',
        // 禁止自身比较
        'no-self-compare': 'error',
        // 禁止一成不变的循环条件，如 while 条件，防止死循环
        'no-unmodified-loop-condition': 'error',
        // 禁止没有必要的字符串拼接，如"a"+"b"应该写成"ab"
        'no-useless-concat': 'error',
        // 禁止使用不带await的async表达式
        'require-await': 'error',
        // 禁止else中出现单独的if
        'no-lonely-if': 'error',
        // 禁止多余的三元表达式，如 a === 1 ? true : false 应缩写为 a === 1
        'no-unneeded-ternary': 'error',
        // 尽可能的简化赋值操作，如 x = x + 1 应简化为 x += 1
        'operator-assignment': 'error',
        // 当前头函数体的花括号可以省略时，不允许出现花括号
        'arrow-body-style': 'error',
        // 禁止重复导入
        'no-duplicate-imports': 'error',
        // 禁止不必要的计算属性，如 obj3 = { ["a"] : 1 },其中 ["a"] 是不必要的，直接写 "a"
        'no-useless-computed-key': 'error',
        // 要求使用let或const，而不是var
        'no-var': 'error',
        // 要求对象字面量使用简写
        'object-shorthand': 'error',
        // 要求使用 const 声明不会被修改的变量
        'prefer-const': 'error',
        // 要求优先使用解构赋值, enforceForRenamedProperties 为 true 将规则应用于重命名的变量
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: false,
            },
            {
                enforceForRenamedProperties: true,
            },
        ],
        // 使用模板字符串，而不是字符串拼接
        'prefer-template': 'error',

        // 防止和未来的 HTML 内置标签冲突，强制 Vue 组件命名 必须为多字
        'vue/multi-word-component-names': [
            'error',
            {
                // 忽略 index
                ignores: ['index'],
            },
        ],
    },
}
