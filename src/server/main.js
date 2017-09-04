
import express from "express";
import React from 'react';
import { StaticRouter, matchPath } from 'react-router';
import { renderToString } from 'react-dom/server';
import path from "path";
import fetch from 'node-fetch';
import mockApiMiddleware from "./mock-api-middleware";
import App from '../shared/App'

var app = express();

const routes = [
    '/',
    '/viewitem/:id'
];

app.use(mockApiMiddleware);

// Was facing an issue where __dirname returns '/' when js file is built with webpack
// https://github.com/webpack/webpack/issues/1599
// node: {
//  __dirname: false
//}
app.use(express.static(__dirname + '/www'));  // for images and js files!

// index.html is server from app.get('*') handler!

// this needs to be added for client-side routing to work!
// say for example we go to /viewitem/1, express() needs to know it should serve index.html!
// cause thats where all the code is!
app.get('*', (req, res) => {
  
  // dont think this works right now
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  if (!match) {    
    res.send(`No Match`).status(200).send();
    return;
  }

  fetch('http://localhost:3000/api/images')
      .then(r => r.json())
      .then(images => {
          
          const renderMe = (
              <StaticRouter context={{}} location={req.url}>
                  <App images={images} />
              </StaticRouter>
          );

          // server side render
          res.send(`
            <html>
              <head>
                <script src="/bundle.js"></script> 
              </head>
              <body>
                <script>window.__images__ = ${JSON.stringify(images)};</script>
                <div id="mount">${renderToString(renderMe)}</div>
              </body>
            </html>`).status(200).send();

          // client side render
          // res.send(`
          //   <html>
          //     <head>
          //       <script src="/bundle.js"></script> 
          //     </head>
          //     <body>
          //       <script>window.__images__ = ${JSON.stringify(images)};</script>
          //       <div id="mount"></div>
          //     </body>
          //   </html>`).status(200).send();

      }).catch(err => {
          console.error(err);
      });

  // client side render index.html (before making changes for server side rendering)
  // componentDidMount() would fetch data!
  // res.send(`
  //   <html>
  //     <head>
  //       <script src="/bundle.js"></script> 
  //     </head>
  //     <body>
  //       <div id="mount"></div>
  //     </body>
  //   </html>`);
});
 
var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

