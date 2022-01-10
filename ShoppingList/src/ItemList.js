import React, {Component} from 'react';
import Item from './Item';

class ItemList extends Component {
  render () {
    const {items} = this.props.items
  	return (
      <div>
        <p className="items">My Items</p>
        <ol className="item-list">
          {items.map((item) => <Item item={item}/> )}
        </ol>
      </div>
    )
  }
}

export default ItemList;