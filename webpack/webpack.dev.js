const merge = require('webapck-merge')
const path = require('path')
const webapckConfig = require('path/to/webpack.config.js')

module.exports = merge(webpackConfig,{
  mode:'development',
  output: {
    //path: path.resolve(__dirname,'dist'), //Absolute path, dist is a non existing directory that'll be created when the file is bundled
    path:path.join(__dirname,'dist') ---> No need of using publicPath
    filename:'bundle.js', //Anyname, suggested to use filename.[contentHash].js for cache busting, the content hash changes whenever the file changes.
    //if not, a cached version will be served.
    
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[
          'babel-loader',
          ]
      }
    ]
  },
  
})


 
