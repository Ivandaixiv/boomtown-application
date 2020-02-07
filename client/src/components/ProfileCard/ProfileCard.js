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

const ProfileCard = props => {
  // console.log("ItemCard: ", props.item);

  const { item, classes } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.text}>
          <div className={classes.intro}>
            <Typography>
              <Gravatar
                email={
                  (item && item.itemowner.email && item.itemowner.email) ||
                  item.email
                }
                className={classes.profile}
              />
            </Typography>
            <div>
              <Typography>
                {(item && item.itemowner && item.itemowner.fullname) ||
                  "Your Name"}
              </Typography>
              <Typography>{item && moment(item.created).fromNow()}</Typography>
            </div>
          </div>
          <Typography className={classes.title}>
            {item && item.title}
          </Typography>
          <div className={classes.tagsContainer}>
            {item.tags &&
              item.tags.map(tag => {
                return (
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    key={tag.id}
                    className={classes.tags}
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

export default withStyles(styles)(ProfileCard);
