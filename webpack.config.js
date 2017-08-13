var path = require('path');
var combineLoaders = require('webpack-combine-loaders');

var browserConfig = {
  context: path.join(__dirname, 'src'),
  entry: [
    './client/main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }])
      }     
    ],
  }
};
module.exports = [ browserConfig ];
