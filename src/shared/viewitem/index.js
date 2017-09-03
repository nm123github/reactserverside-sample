
import React from 'react';
import css from './index.css';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux' // <-- is the glue between react and redux
import { bindActionCreators } from 'redux'

class ViewItem extends React.Component {
  
  constructor() {
    super();
  }

  componentDidMount() {

    // // fetch (mock) image data!
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

    if ( !this.props.item.id )
      return null;

    var imgPath = "/images/" + this.props.item.id + ".jpg";

    return (
      <div className={css.item}>
        <div><img src={imgPath}/></div>
        <div><b>{this.props.item.title}</b></div>
        <div>{this.props.item.description}</div>
        <div onClick={this.props.history.goBack.bind(this)}><a href="#"><b>Back</b></a></div>
      </div>
    );
  }

}

// function is the glue between react and redux
function mapStateToProps(state, ownProps) {
  // Whatever gets retrieved from here will show up as props
  return {
    item: state.images.find((item) => item.id === ownProps.match.params.id),
  }
}

// anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewItem);
