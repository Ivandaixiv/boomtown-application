import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

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

export default withStyles(styles)(ShareItemPreview);
