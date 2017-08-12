
import React from 'react';
import css from './index.css';
import { Link } from 'react-router-dom'

class ViewItem extends React.Component {
  
  constructor() {
    super();
    this.state = {
      item: {}
    };
  }

  componentDidMount() {

    // fetch (mock) image data!
    fetch('http://localhost:3000/api/images/' + this.props.match.params.id).then((res) => {
      if (res.status === 200)
        return res.json();
      throw "Error retrieving data..."        
    }).then((data) => {
      this.setState({
        item: data,
      })      
    });

  }
 
  render() {

    if ( !this.state.item )
      return null;

    var imgPath = "/images/" + this.state.item.id + ".jpg";

    return (
      <div className={css.item}>
        <div><img src={imgPath}/></div>
        <div><b>{this.state.item.title}</b></div>
        <div>{this.state.item.description}</div>
        <div onClick={this.props.history.goBack.bind(this)}><a href="#"><b>Back</b></a></div>
      </div>
    );
  }

}

export default ViewItem;
