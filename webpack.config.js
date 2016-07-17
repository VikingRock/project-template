'use strict';

var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname)
  },

  entry: './source/js/main.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname),
    sourceMapFilename: '[file].map'
  },

  resolve: {
    modulesDirectories: ['node_modules', './source/js', './lib', './vendor']
  }
};
