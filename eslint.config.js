// Нет необходимости импортировать глобальные переменные
const languageOptions = { globals: { node: true } };

// Используйте настроенные правила плагина ESLint
const eslintConfig = {
  extends: ['plugin:@eslint/recommended'],
};

export default [languageOptions, eslintConfig];