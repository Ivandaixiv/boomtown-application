import React from "react";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";
import Gravatar from "react-gravatar";
import styles from "./styles";

const UserCard = props => {
  const { classes, profile } = props;

  return (
    <Card className={classes.profile}>
      {profile && (
        <CardContent className={classes.content}>
          <Typography variant="h3" color="secondary">
            <Gravatar
              className={classes.icon}
              email={profile.email || "placeholder@gmail.com"}
            />
            {(profile.fullname && profile.fullname) || "Your Name"}
          </Typography>
          <Typography>
            {profile.items.length} Items Shared {profile.borrowed.length} Items
            Borrowed
          </Typography>
          <Typography>
            "{(profile.bio && profile.bio) || "No bio provided."}"
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default withStyles(styles)(UserCard);
