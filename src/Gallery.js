import React from 'react';
 
class Gallery extends React.Component {
  
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/images').then(function(response){
        console.log(response);
    });
  }
 
  render() {
    return (
      <div>Hello World</div>
    );
  }
}
export default Gallery;

