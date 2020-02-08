import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  MenuItem,
  Menu
} from "@material-ui/core";
import boomtownLogo from "../../images/boomtown.svg";
import { withStyles } from "@material-ui/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styles from "./styles";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { Mutation } from "react-apollo";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { LOGOUT_MUTATION, VIEWER_QUERY } from "../../apollo/queries";

function Navigation(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { classes } = props;
  return (
    <Mutation
      mutation={LOGOUT_MUTATION}
      refetchQueries={[{ query: VIEWER_QUERY }]}
    >
      {logout => (
        <AppBar position="sticky">
          <Toolbar className={classes.split}>
            <NavLink to="/items" className={classes.link}>
              <Button>
                <img
                  src={boomtownLogo}
                  alt="Boomtown"
                  className={classes.logo}
                />
              </Button>
            </NavLink>
            <div className={classes.split}>
              {props.location.pathname !== "/share" && (
                <NavLink to="/share" className={classes.link}>
                  <Button
                    color="secondary"
                    aria-label="add"
                    variant="text"
                    className={classes.add}
                  >
                    <AddCircleIcon className={classes.gap} />
                    <Typography className={classes.gap}>
                      {" "}
                      Share Something{" "}
                    </Typography>
                  </Button>
                </NavLink>
              )}
              <div>
                <IconButton
                  aria-label="display more actions"
                  edge="end"
                  color="inherit"
                  onClick={handleClick}
                >
                  <MoreIcon />
                </IconButton>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/profile" className={classes.link}>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropMenuItems}
                    >
                      <FingerprintIcon />
                      <Typography className={classes.textSpace}>
                        Your Profile
                      </Typography>
                    </MenuItem>
                  </Link>
                  <NavLink
                    to="/home"
                    onClick={logout}
                    color="secondary"
                    underline="none"
                    className={classes.link}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropMenuItems}
                    >
                      <PowerSettingsNewIcon />
                      <Typography className={classes.textSpace}>
                        Sign Out
                      </Typography>
                    </MenuItem>
                  </NavLink>
                </Menu>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </Mutation>
  );
}
export default withRouter(withStyles(styles)(Navigation));
