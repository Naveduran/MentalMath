import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends Component {
  render(){
    const {onClick, disabled} = this.props
    return (
      <button onClick={() => onClick()} disabled={disabled}>
        Delete Last Item
      </button>
    )
  }
}

DeleteButton.propTypes = {
	onClick: PropTypes.func.isRequired,
  	disabled: PropTypes.bool.isRequired,
}

export default DeleteButton;

