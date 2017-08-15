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
  devtool: "cheap-module-source-map",  
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

var serverConfig = {
  context: path.join(__dirname, 'src'),
  target: "node",  
  entry: [
    './server/main.js',
  ],
  node: {
    __dirname: false
  },  
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  externals: /^[a-z\-0-9]+$/,
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

module.exports = [ browserConfig, serverConfig ];
