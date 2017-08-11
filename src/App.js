<<<<<<< HEAD

import React from 'react';
import Gallery from './gallery';
=======
import React from 'react';
import Gallery from './Gallery';
>>>>>>> 74c6ac7ebb263e82533e623bc44a40d536b8a52e
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
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

=======
      count: 0,
    };
  }
 
  render() {
    return (
      <Gallery/>
    );
  }
}
>>>>>>> 74c6ac7ebb263e82533e623bc44a40d536b8a52e
export default App;

