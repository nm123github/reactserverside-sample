/**
Universal JavaScript Apps with React Router 4
https://ebaytech.berlin/universal-web-apps-with-react-router-4-15002bb30ccb

The ultimate Webpack setup
https://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

Backend Apps with Webpack (Part I)
http://jlongster.com/Backend-Apps-with-Webpack--Part-I
*/

/*
This does not work right now!!
*/

import express from "express";
import path from "path";
import casual from "casual";
import React from "react";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import { mockApiMiddleware } from "connect-mock-api";
import { renderToString } from "react-dom/server";
import { StaticRouter , matchPath } from 'react-router';
import App from "../shared/App";

import webpackConfig from "../../webpack.config.js";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listeninggg");
});
