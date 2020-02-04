import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { ItemPreviewContext } from "../ShareItemPreview";

const ShareItemPreview = ({ item, classes }) => {
  return (
    <ItemPreviewContext>
      {({ state }) => {
        <div>
          <p>Hello World</p>
        </div>;
      }}
    </ItemPreviewContext>
  );
};

export default withStyles(styles)(ShareItemPreview);
