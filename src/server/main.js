
import express from "express";
import path from "path";
import mockApiMiddleware from "./mock-api-middleware";

var app = express();

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
  // client side render index.html (before server side rendering)
  res.send(`
    <html>
      <head>
        <script src="/bundle.js"></script> 
      </head>
      <body>
        <div id="mount"></div>
      </body>
    </html>`);
});
 
var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

