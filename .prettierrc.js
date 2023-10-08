module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  endOfLine: 'lf',
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ],
};
