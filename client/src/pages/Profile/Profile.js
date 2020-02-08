import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";

const Profile = props => {
  return (
    <Grid>
      <ProfileCard profile={props.profile} />
      <p>Item Cards placeholder</p>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
