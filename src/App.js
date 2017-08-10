import React from 'react';
import Gallery from './Gallery';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <Gallery/>
    );
  }
}
export default App;

