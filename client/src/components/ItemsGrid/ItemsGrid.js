import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";

const ItemsGrid = ({ items, classes }) => {
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

ItemCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.object,
      imageurl: PropTypes.string,
      description: PropTypes.string,
      created: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.object),
      itemowner: PropTypes.object,
      borrower: PropTypes.object
    })
  ),
  classes: PropTypes.object
};

export default withStyles(styles)(ItemsGrid);
