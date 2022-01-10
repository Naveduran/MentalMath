import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CreateButton extends Component {
  render() {
    const {disabled} = this.props
    return (
      <button disabled={disabled}>Add</button>
    )
  }
}

CreateButton.propTypes = {
  disabled : PropTypes.bool.isRequired,
}

export default CreateButton;
