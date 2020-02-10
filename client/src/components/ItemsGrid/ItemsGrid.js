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
        <Grid className={classes.content} container item lg={12}>
          <Grid container justify="center">
            {items
              ? items.map(item => {
                  return (
                    <Grid key={item.id} item className={classes.cardSpacing}>
                      <ItemCard item={item} />
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ItemsGrid);
