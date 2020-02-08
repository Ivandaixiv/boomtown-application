import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class ItemsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items, classes } = this.props;
    return (
      <div>
        <Grid
          className={classes.content}
          container
          alignContent="center"
          item
          lg={12}
        >
          <Grid container justify="center">
            {items
              ? items.map(item => {
                  /* console.log("Current Item: ", item); */

                  return (
                    <Grid key={item.id} item className={classes.cardSpacing}>
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

export default withStyles(styles)(ItemsGrid);
