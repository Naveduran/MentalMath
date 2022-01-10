import React, {Component} from 'react';

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

export default DeleteButton;
