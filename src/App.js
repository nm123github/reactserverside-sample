
import React from 'react';
import Gallery from './gallery';
import ViewItem from './viewitem';

import { BrowserRouter, Route, browserHistory } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }  

  componentDidMount() {

    // fetch (mock) images data!
    fetch('http://localhost:3000/api/images').then((res) => {
      if (res.status === 200)
        return res.json();

      throw "Error retrieving data..."        
    }).then((data) => {
      this.setState({
        images: data,
      })      
    });

  }  

  render() {

    var ImageGallery = () => <Gallery images={this.state.images} />;

    return (
      <BrowserRouter history={ browserHistory }>
        <div>
          <Route exact path="/" component={ImageGallery} />
          <Route path="/viewitem/:id" component={ViewItem} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
