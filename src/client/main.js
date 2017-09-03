// console.log('Hello World!');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../shared/App';
import store from '../shared/redux';

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	 <Provider store={store}>
     	<App/>
     </Provider>,
    document.getElementById('mount')
  );
});

