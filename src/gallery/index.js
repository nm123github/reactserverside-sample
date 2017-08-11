
import React from 'react';
import GalleryItem from './../galleryitem';

import css from './index.css';

class Gallery extends React.Component {
  
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    if ( !this.props.images )
      return null;

    const galleryItems = this.props.images.map((image) =>
      <GalleryItem item={image} />
    );

    return (
      <div>hel</div>
    );
  }
}
export default Gallery;
