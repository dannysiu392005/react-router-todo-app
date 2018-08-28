import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className='three-container'>
        <div className='name three-child'>{this.props.item.name}</div>
        <div className='delete three-child'>
          <button>Delete</button>
        </div>
        <div className='edit three-child'>
          Edit
        </div>
      </div>
    );
  }
}

export default Item;
