import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ item }) => {
        return (
          <div>
            <ItemCard item={item}></ItemCard>
          </div>
        );
      }}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;
