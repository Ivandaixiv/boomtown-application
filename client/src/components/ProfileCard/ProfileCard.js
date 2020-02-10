import React from "react";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";
import Gravatar from "react-gravatar";
import styles from "./styles";

const ProfileCard = props => {
  const { classes, profile } = props;

  return (
    <Card className={classes.profile}>
      <CardContent className={classes.content}>
        <Typography variant="h3" color="secondary">
          <Gravatar
            className={classes.icon}
            email={(profile && profile.email) || "placeholder@gmail.com"}
          />
          {(profile && profile.fullname && profile.fullname) || "Your Name"}
        </Typography>
        <Typography>
          {profile && profile.items.length} Items Shared{" "}
          {profile && profile.borrowed.length} Items Borrowed
        </Typography>
        <Typography>
          "{(profile && profile.bio && profile.bio) || "No bio provided."}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ProfileCard);
