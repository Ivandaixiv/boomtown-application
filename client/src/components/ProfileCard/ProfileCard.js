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

const ProfileCard = props => {
  // console.log("ItemCard: ", props.item);

  const { item, classes, profile } = props;
  console.log("Props", props);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.text}>
          <div className={classes.intro}>
            <Typography>
              <Gravatar
                email={(profile && profile.email) || "placeholder@gmail.com"}
                className={classes.profile}
              />
            </Typography>
            <div>
              <Typography>
                {(profile && profile.fullname && profile.fullname) ||
                  "Your Name"}
              </Typography>
            </div>
          </div>
          <Typography className={classes.title}>
            {item && item.title}
          </Typography>
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
