const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public')
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.csr.html',
      template:'src/index.csr.html',
      inject:true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options: {
              modules: true,
            },
          }
        ]
      }
    ]
  }
})