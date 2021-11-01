// webpack.config.js is the standard file to write the rules of bundling, the name of the config.js file should be as is(webpack.config.js).
//There are 4 main parts of webpack config
//1.Entry point -> The file from which the bundling should begin.
//2. Destination file/folder -> Bundled file's destination dir
//3. Module loader -> Test and convert/bundle non js files using the given rules(given below)
//4. Plugin -> Similar to module loader, but plugin is applied on the bundled file of module loader to further optimize it.


var path = require('path')
module.exports = {
  entry: './src/js/app.js', //Relative path
  output: {
    path: path.resolve(__dirname,'dist') //Absolute path, dist is a non existing directory that'll be created when the file is bundled
    filename:'bundle.js' //Anyname
  }
}
