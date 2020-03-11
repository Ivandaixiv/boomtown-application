import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import PropTypes from "prop-types";

const Share = props => {
  const { classes, tags } = props;
  return (
    <div className={classes.cardView}>
      <ShareItemPreview />
      <ShareForm tags={tags} />
    </div>
  );
};

Share.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })
  )
};
export default withStyles(styles)(Share);
