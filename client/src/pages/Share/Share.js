import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareForm from "../../components/ShareItemForm";
// import ItemCard from "../../components/ItemCard";
/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
// import ShareItemForm from '../../components/ShareItemForm';
// import ShareItemPreview from '../../components/ShareItemPreview';

const Share = props => {
  // console.log("Share Props: ", props);
  const { classes } = props;
  return (
    <div className={classes.cardView}>
      <p>This will be the item card preview</p>
      <ShareForm tags={props.tags} />
    </div>
  );
};

export default withStyles(styles)(Share);
