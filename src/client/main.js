// console.log('Hello World!');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'
import App from '../shared/App';

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<BrowserRouter history={ browserHistory }>
      <App images={window.__images__} />
    </BrowserRouter>,
    document.getElementById('mount')
  );
});

