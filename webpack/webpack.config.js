// webpack.config.js is the standard file to write the rules of bundling.
//There are 4 main parts of webpack config
//1.Entry point -> The file from which the bundling should begin.
//2. Destination file/folder -> Bundled file's destination dir
//3. Module loader -> Test and convert/bundle non js files using the given rules(given below)
//4. Plugin -> Similar to module loader, but plugin is applied on the bundled file of module loader to further optimize it.


var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: './src/js/app.js', //Relative path
  
  module:{
    rules:[
      {
        test: /\.css$/, //For what files we'd want to apply transformations
        use:[
        'style-loader',
        'css-loader',  //Apply the loaders, loaders are executed in the reverse order
        ]
      }
    ]
  },
  plugins:[ //Plugins not mandatory
    new webpack.optimize.UglifyJsPlugin({}),
    new HtmlWebpackPlugin({   //This is to be used if the file name is set dynamically, because the script source file name keeps changing whenever file contents are changed,
      //thus when a template is passed, it is considered as the base file with.
      template:'path/to/html'
    })
  ]
    
}
