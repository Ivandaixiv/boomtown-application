import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";

class ItemsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("ItemGrid Props: ", this.props.items);
    const { items } = this.props;
    return (
      <div>
        <Grid alignContent="center" item lg={12}>
          <Grid container justify="center" spacing={3}>
            {items
              ? items.map(item => {
                  /* console.log("Current Item: ", item); */

                  return (
                    <Grid alignItems="center" key={item.id} item>
                      <ItemCard item={item} />
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </Grid>
        {/* {this.props.items.length > 0 ? return : return } */}
        {/* <ItemCard items={this.props.items}/> */}
      </div>
    );
  }
}

export default ItemsGrid;
