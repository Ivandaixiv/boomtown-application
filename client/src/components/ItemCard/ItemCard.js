import React from "react";
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

const ItemCard = props => {
  console.log("ItemCard: ", props.item);

  const { item, classes } = props;

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
                email={item && item.itemowner && item.itemowner.email}
                className={classes.profile}
              />
            </Typography>
            <div>
              <Typography>
                {item && item.itemowner && item.itemowner.fullname}
              </Typography>
              <Typography>{item && moment(item.created).fromNow()}</Typography>
            </div>
          </div>
          <Typography className={classes.title}>
            {item && item.title}
          </Typography>
          <div className={classes.tags}>
            {item.tags &&
              item.tags.map(tag => {
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
          </div>
          <Typography>{item && item.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" className={classes.button}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
