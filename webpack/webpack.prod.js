const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackconfig = require('path/to/webpack.config.js')

module.exports = merge(webpackconfig,{
  mode:'production',
  output:{
    filename:'bundle.[contenthash].js',
    path:path.join(__dirname,'build')
  },
  rules:[
    {
      test:/\.ts$/,
      use:[
        'babel-loader',
        'ts-loader'
       ],
      exclude:/node_modules/
    }
   ],
  plugins:[
    new HtmlWebpackPlugin({
      template:'paht/to/html'
    })
    ]
})
  
