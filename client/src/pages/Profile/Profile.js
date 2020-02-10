import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
import ItemGrid from "../../components/ItemsGrid";

const Profile = props => {
  const { profile, classes } = props;
  return (
    <div>
      <Grid container justify="center">
        <Grid container justify="center">
          <Grid item xs={11}>
            <ProfileCard profile={profile} />
          </Grid>
        </Grid>
      </Grid>
      <div>
        {profile && profile.items.length > 0 && (
          <Typography color="primary" variant="h4" className={classes.title}>
            Shared Items
          </Typography>
        )}
        <ItemGrid items={profile.items} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
