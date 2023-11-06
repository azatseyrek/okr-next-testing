import 'prettier-plugin-tailwindcss';

const prettierSettings = {
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  arrowParens: 'always',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^next',
    '^(?:\\./)*(?:\\../)*components/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^(?:\\./)*(?:\\../)*pages/(.*)$',
    '^(?:\\./)*(?:\\../)*data/(.*)$',
    '^(?:\\./)*(?:\\../)*hooks/(.*)$',
    '^(?:\\./)*(?:\\../)*utils/(.*)$',
    '^(?:\\./)*(?:\\../)*lib/(.*)$',
    '^(?:\\./)*(?:\\../)*types/(.*)$',
    '^(?:\\./)*(?:\\../)*styles/(.*)$',
    '^\\./.*\\.(css|scss|less)$',
    '^(?:\\./)*(?:\\../)*assets/(.*)$',
    '^\\./.*\\.(svg|png|jpg|jpeg|gif|ico|webp|avif)$',
    '^\\./.*\\.(ttf|otf|eot|woff|woff2)$',
    '^[./]',
  ],
};


export default prettierSettings;