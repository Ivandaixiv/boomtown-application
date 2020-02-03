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
import Gravatar from "react-gravatar";
import styles from "./styles";
import moment from "moment";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("ItemCard: ", this.props.item);

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
            <div className={classes.intro}>
              <Typography>
                <Gravatar
                  email={item.itemowner.email}
                  className={classes.profile}
                />
              </Typography>
              <div>
                <Typography> {item.itemowner.fullname}</Typography>
                <Typography> {moment(item.created).fromNow()}</Typography>
              </div>
            </div>
            <Typography className={classes.title}>{item.title}</Typography>
            {item.tags.map(tag => {
              return (
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  key={tag.id}
                >
                  {tag.title}
                </Typography>
              );
            })}
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
