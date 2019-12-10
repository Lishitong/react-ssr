const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
module.exports = merge(common,{
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public')
  }
})