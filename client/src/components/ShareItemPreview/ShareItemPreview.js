import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => {
        return (
          <div>
            <ItemCard item={state.item}></ItemCard>
          </div>
        );
      }}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;
