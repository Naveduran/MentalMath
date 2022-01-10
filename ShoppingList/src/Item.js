import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    const {item, index} = this.props
    return ( <li key={index}>{item}</li> )
  }
}

Item.propTypes = {
	item: PropTypes.string.isRequired,
  	index: PropTypes.string.isRequired,
}

export default Item;
