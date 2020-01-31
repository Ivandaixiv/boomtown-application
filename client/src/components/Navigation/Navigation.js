import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography
} from "@material-ui/core";
import boomtownLogo from "../../images/boomtown.svg";
import { withStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <img src={boomtownLogo} className={classes.logo} />
          <IconButton color="secondary" aria-label="add" variant="text">
            <AddIcon color="primary" />
            <Typography>Share Something</Typography>
          </IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(Navigation);
