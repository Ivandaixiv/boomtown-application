import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";

const Profile = ({ classes }) => {
  return <ProfileCard />;
};

export default withStyles(styles)(Profile);
