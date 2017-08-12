
var express = require('express');
var path = require('path');
var casual = require('casual').en_US;
var webpackDevMiddleware = require('webpack-dev-middleware');
var mockApiMiddleware = require('connect-mock-api').middleware;
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var app = express();
 
var compiler = webpack(webpackConfig);

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
      },
      {
          path: '/api/images/:id',
          template: function(params) {
              return {
                id: params.$routeMatch.id,
                title: casual.title,
                path: "images/" + params.$routeMatch.id + ".jpg",
                description: casual.description
              };
          }
      }      
    ]
}));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: "/",
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(express.static(__dirname + '/www'));

// this needs to be added for client-side routing to work!
// say for example we go to /viewitem/1, express() needs to know it should serve index.html!
// cause thats where all the code is!
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/www/index.html'));
});
 
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
