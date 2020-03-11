import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import UserCard from "../../components/UserCard";
import ItemGrid from "../../components/ItemsGrid";
import PropTypes from "prop-types";

const Profile = props => {
  const { profile, classes } = props;
  console.log("Profile", props);
  return (
    <div>
      <Grid container justify="center">
        <Grid container justify="center">
          <Grid item xs={11}>
            <UserCard profile={profile} />
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
Profile.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  profile: PropTypes.shape({
    id: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    fullName: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    borrowed: PropTypes.array
  })
};

export default withStyles(styles)(Profile);
