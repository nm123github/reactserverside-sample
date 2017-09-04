
import React from 'react';
import { Route } from 'react-router-dom'
import Gallery from './gallery';
import ViewItem from './viewitem';

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   images: [],
    // };
  }  

  componentDidMount() {

    // fetch (mock) images data!
    // fetch('http://localhost:3000/api/images').then((res) => {
    //   if (res.status === 200)
    //     return res.json();

    //   throw "Error retrieving data..."        
    // }).then((data) => {
    //   this.setState({
    //     images: data,
    //   })      
    // });

  }  

  render() {

    var ImageGallery = () => <Gallery images={this.props.images} />;

    return (
      <div>
        <Route exact path="/" component={ImageGallery} />
        <Route path="/viewitem/:id" render={
          ({ match }) => (
              <ViewItem item={this.props.images.find(item => item.id == match.params.id)} />
          )
        } />
      </div>
    );
  }

}

export default App;
