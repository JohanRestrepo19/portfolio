/**@type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  arrowParens: 'avoid',
  singleQuote: true,
};

module.exports = config;
