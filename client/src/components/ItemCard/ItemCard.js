import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("ItemCard: ", this.props);
    const { item, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            image="https://picsum.photos/1920/1080"
            title="placeholder"
            className={classes.media}
          />
          <CardContent className={classes.text}>
            <Typography>
              {item.itemowner.fullname + " " + item.created}
            </Typography>
            <Typography>{item.title}</Typography>
            <Typography>{item.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" className={classes.button}>
            Borrow
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ItemCard);
