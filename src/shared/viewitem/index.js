
import React from 'react';
import css from './index.css';
import { Link, browserHistory } from 'react-router-dom'

class ViewItem extends React.Component {
  
  constructor() {
    super();
    // this.state = {
    //   item: {}
    // };
  }

  componentDidMount() {
    
    // fetch (mock) image data!
    // fetch('http://localhost:3000/api/images/' + this.props.match.params.id).then((res) => {
    //   if (res.status === 200)
    //     return res.json();
    //   throw "Error retrieving data..."        
    // }).then((data) => {
    //   this.setState({
    //     item: data,
    //   })      
    // });

  }
 
  render() {

    if ( !this.props.item )
      return null;

    var imgPath = "/images/" + this.props.item.id + ".jpg";

    return (
      <div className={css.item}>
        <div><img src={imgPath}/></div>
        <div><b>{this.props.item.title}</b></div>
        <div>{this.props.item.description}</div>
        <div onClick={() => {
          window.history.back();
        }}><a href="#"><b>Back</b></a></div>        
      </div>
    );

  }

}

export default ViewItem;
