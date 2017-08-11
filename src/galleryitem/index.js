
import React from 'react';
import css from './index.css';

class GalleryItem extends React.Component {
  
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {

    var imgPath = "images/" + this.props.item.id + ".jpg";

    return (
      <div className={css.item}>
        <div><img src={imgPath}/></div>
        <div><b>{this.props.item.title}</b></div>
        <div>{this.props.item.description}</div>
      </div>
    );
  }
}
export default GalleryItem;
