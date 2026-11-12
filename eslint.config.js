const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["TodoList/assets/js/lib/**", "node_modules/**", "playwright-report/**", "test-results/**"],
  },
  js.configs.recommended,
  {
    files: ["ColorGame/**/*.js", "TodoList/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: { ...globals.browser, $: "readonly" },
    },
  },
  {
    files: ["*.config.js", "eslint.config.js", "tests/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
  },
];
