import React, { Component } from 'react';
import ItemCard from '../ItemCard'

class ItemsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    console.log("ItemGrid: " , this.props);

    return (
      <div>
        <ItemCard items={this.props}/>
      </div>
    );
  }
}

export default ItemsGrid;
