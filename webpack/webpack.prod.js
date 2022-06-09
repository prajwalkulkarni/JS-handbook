const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    },{
      test:/\.scss$/,
      use:[
        'MiniCssExtractpLugin.loader, // Generate separate css file instead of converting css into commonjs module and injecting it to js file(Do it only in production, because it takes time to spit out css file).
        'css-loader',
        'sass-loader'
   ],
  plugins:[
    new HtmlWebpackPlugin({
      template:'paht/to/html'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash].css'
    })
    ]
})
  
