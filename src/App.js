
import React from 'react';
import Gallery from './Gallery';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
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
    return (
      <Gallery images={this.state.images}/>
    );
  }
}

export default App;
