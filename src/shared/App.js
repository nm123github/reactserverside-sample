
import React from 'react';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'
import { Provider } from 'react-redux';

import Gallery from './gallery';
import ViewItem from './viewitem';
import store from './redux';

class App extends React.Component {
  
  constructor() {
    super();
  }

  render() {

    return (
        <Gallery />

      /*<BrowserRouter history={ browserHistory }>
        <div>
          <Route exact path="/" component={Gallery} />
          <Route path="/viewitem/:id" component={ViewItem} />
        </div>
      </BrowserRouter>*/
    );
  }

}

export default App;
