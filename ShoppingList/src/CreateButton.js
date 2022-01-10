import React, {Component} from 'react';

class CreateButton extends Component {
  render() {
    const {disabled} = this.props
    return (
      <button disabled={disabled}>Add</button>
    )
  }
}

export default CreateButton;
