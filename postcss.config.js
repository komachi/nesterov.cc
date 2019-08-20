module.exports = (ctx) => ({
  parser: false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'postcss-flexbugs-fixes': {}
  }
})
