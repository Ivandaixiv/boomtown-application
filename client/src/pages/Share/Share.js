import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = props => {
  const { classes } = props;
  return (
    <div className={classes.cardView}>
      <ShareItemPreview />
      <ShareForm tags={props.tags} />
    </div>
  );
};

export default withStyles(styles)(Share);
