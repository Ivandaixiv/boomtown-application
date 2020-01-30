import React, { Component } from 'react';

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    console.log("ItemCard: " , this.props.item);

    return (
      
      <p>{this.props.item.title}</p>
    );
  }
}

export default ItemCard;
