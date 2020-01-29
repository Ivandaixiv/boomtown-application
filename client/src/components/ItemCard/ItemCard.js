import React, { Component } from 'react';

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    console.log("ItemCard: " , this.props);

    return (
      <p>Hello World</p>
    );
  }
}

export default ItemCard;
