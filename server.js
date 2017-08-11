
var express = require('express');
var casual = require('casual');
var path = require('path');

var webpackDevMiddleware = require('webpack-dev-middleware');
var mockApiMiddleware = require('connect-mock-api').middleware;
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var app = express();
 
var compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: path.join(__dirname, 'www'),
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(mockApiMiddleware({
  baseUrl: '', //optional
  endpoints: [
      {
          path: '/api/images/',
          template: function() {
              var arr = [];
              for (var i = 1; i <= 6 ; i++) {
                arr.push({
                  id: i,
                  title: casual.title,
                  path: "images/" + i + ".jpg",
                  description: casual.description
                })
              }
              return arr;
          }
      }
    ]
}));
 
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
