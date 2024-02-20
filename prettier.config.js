/**@type {import("prettier").Config} */
const config = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
};

module.exports = config;
