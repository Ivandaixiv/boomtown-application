import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const ItemsGrid = props => {
  const { items, classes } = props;
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
};

export default withStyles(styles)(ItemsGrid);
