
const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(common, {
  target: 'node',
  entry: './server/index.js',
  externals:[nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  }
})