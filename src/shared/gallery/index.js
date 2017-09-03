
import React from 'react';
import GalleryItem from '../galleryitem';

import css from './index.css';

import { connect } from 'react-redux' // <-- is the glue between react and redux
import { bindActionCreators } from 'redux'
import { loadImages } from '../redux'

class Gallery extends React.Component {
  
  constructor() {
    super();
  }

  componentWillMount() {
    if ( this.props.images.length === 0 )
      this.props.loadImages();
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

// function is the glue between react and redux
function mapStateToProps(state) {
  // Whatever gets retrieved from here will show up as props
  return {
    images: state.images,
  }
}

// anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadImages: loadImages,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
