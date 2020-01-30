import React, { Component } from 'react';
import ItemCard from '../ItemCard'

class ItemsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    console.log("ItemGrid Props: " , this.props.items);
    const {items} = this.props;
    return (
      <div>
        {items ? items.map(item => {
          console.log("Current Item: ", item);
          return <ItemCard item={item}/>
        }) : null }
        {/* {this.props.items.length > 0 ? return : return } */}
        {/* <ItemCard items={this.props.items}/> */}
      </div>
    );
  }
}

export default ItemsGrid;
