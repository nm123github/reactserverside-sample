module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(3);

var _path2 = _interopRequireDefault(_path);

var _mockApiMiddleware = __webpack_require__(4);

var _mockApiMiddleware2 = _interopRequireDefault(_mockApiMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_mockApiMiddleware2.default);

app.use(_express2.default.static(__dirname + '/www'));

// this needs to be added for client-side routing to work!
// say for example we go to /viewitem/1, express() needs to know it should serve index.html!
// cause thats where all the code is!
app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname + '/www/index.html'));
  // res.send(`
  //     <!DOCTYPE html>
  //     <head>
  //       <script src="/bundle.js" defer></script>
  //     </head>

  //     <body>
  //       <div id="mount">${renderToString(<App />)}</div>
  //     </body>
  //   </html>
  // `);
});

var server = app.listen(3000, "localhost", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connectMockApi = __webpack_require__(5);

var _casual = __webpack_require__(6);

var _casual2 = _interopRequireDefault(_casual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// api/images
// api/images/[1..6]
exports.default = (0, _connectMockApi.middleware)({
    baseUrl: '', //optional
    endpoints: [{
        path: '/api/images/',
        template: function template() {
            var arr = [];
            for (var i = 1; i <= 6; i++) {
                arr.push({
                    id: i,
                    title: _casual2.default.title,
                    path: "images/" + i + ".jpg",
                    description: _casual2.default.description
                });
            }
            return arr;
        }
    }, {
        path: '/api/images/:id',
        template: function template(params) {
            return {
                id: params.$routeMatch.id,
                title: _casual2.default.title,
                path: "images/" + params.$routeMatch.id + ".jpg",
                description: _casual2.default.description
            };
        }
    }]
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("connect-mock-api");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("casual");

/***/ })
/******/ ]);