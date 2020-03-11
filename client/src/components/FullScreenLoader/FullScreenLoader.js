import React from "react";
import {
  withStyles,
  CircularProgress,
  Typography,
  Grid
} from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
const FullScreenLoader = props => {
  const { classes } = props;
  return (
    <Grid item align="center" className={classes.grid}>
      <CircularProgress />
      <Typography color="primary">
        "For it is in giving that we recieve."
      </Typography>
    </Grid>
  );
};
FullScreenLoader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};
export default withStyles(styles)(FullScreenLoader);
