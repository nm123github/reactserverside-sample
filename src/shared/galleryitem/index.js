
import React from 'react';
import css from './index.css';
import { Link } from 'react-router-dom'

class GalleryItem extends React.Component {
  
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {

    var itemLink = "/viewitem/" + this.props.item.id;
    var imgPath = "images/" + this.props.item.id + ".jpg";

    return (
      <div className={css.item}>
        <div><img src={imgPath}/></div>
        <div><Link to={itemLink}><b>{this.props.item.title}</b></Link></div>
        <div>{this.props.item.description}</div>
      </div>
    );
  }
}
export default GalleryItem;
