
var express = require('express');
<<<<<<< HEAD
var casual = require('casual');
var path = require('path');

=======
var mockApiMiddleware = require('connect-mock-api').middleware;
var casual = require('casual').en_US;
>>>>>>> 74c6ac7ebb263e82533e623bc44a40d536b8a52e
var webpackDevMiddleware = require('webpack-dev-middleware');
var mockApiMiddleware = require('connect-mock-api').middleware;
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var app = express();
 
var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

<<<<<<< HEAD
=======
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

>>>>>>> 74c6ac7ebb263e82533e623bc44a40d536b8a52e
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
