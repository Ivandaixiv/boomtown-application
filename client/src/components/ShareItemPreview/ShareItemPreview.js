import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ item }) => {
        return (
          <div className={classes.preview}>
            <ItemCard item={item}></ItemCard>
          </div>
        );
      }}
    </ItemPreviewContext.Consumer>
  );
};
ShareItemPreview.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};
export default withStyles(styles)(ShareItemPreview);
