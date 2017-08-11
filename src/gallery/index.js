
import React from 'react';
import GalleryItem from '../galleryitem';

import css from './index.css';

class Gallery extends React.Component {
  
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {

    if ( this.props.images.length === 0 )
      return null;

    return (
      <div className={css.container}>
        {this.props.images.map((image) =>
          <GalleryItem key={image.id} item={image} />
        )}
      </div>
    );
  }

}

export default Gallery;
