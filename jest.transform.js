module.exports = require('babel-jest').createTransformer({
  presets: ['es2015'],
  plugins: [
    'syntax-class-properties',
    'transform-class-properties',
  ],
})