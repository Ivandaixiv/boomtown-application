import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
import ItemGrid from "../../components/ItemsGrid";

const Profile = props => {
  const { items, profile } = props;
  return (
    <Grid container justify="center">
      <Grid container justify="center" spacing={2}>
        <Grid item xs={10}>
          <ProfileCard profile={profile} />
        </Grid>

        <ItemGrid items={profile.items} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
