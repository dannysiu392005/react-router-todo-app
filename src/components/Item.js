import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
      <div className='three-container'>
        <div className='name three-child'>{this.props.item.name}</div>
        <div className='delete three-child'>
          <button onClick={this.onDelete}>Delete</button>
        </div>
        <div className='edit three-child'>
          Edit
        </div>
      </div>
    );
  }
}

export default Item;
