import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  MenuItem,
  Menu,
  Link
} from "@material-ui/core";
import boomtownLogo from "../../images/boomtown.svg";
import { withStyles } from "@material-ui/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styles from "./styles";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { Mutation } from "react-apollo";
import { LOGOUT_MUTATION } from "../../apollo/queries";

function Navigation(props, { location }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { classes } = props;

  return (
    <Mutation mutation={LOGOUT_MUTATION}>
      {logout => (
        <AppBar position="sticky">
          <Toolbar className={classes.split}>
            <Button href="./items">
              <img src={boomtownLogo} alt="Boomtown" className={classes.logo} />
            </Button>
            <div className={classes.split}>
              {window.location.pathname !== "/share" ? (
                <Button
                  color="secondary"
                  aria-label="add"
                  variant="text"
                  className={classes.add}
                  href="./share"
                >
                  <AddCircleIcon className={classes.gap} />
                  <Typography className={classes.gap}>
                    {" "}
                    Share Something{" "}
                  </Typography>
                </Button>
              ) : null}
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
                  <Link color="secondary" href="./profile" underline="none">
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
                  <Link onClick={logout} color="secondary" underline="none">
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropMenuItems}
                    >
                      <PowerSettingsNewIcon />
                      <Typography className={classes.textSpace}>
                        Sign Out
                      </Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </Mutation>
  );
}
export default withStyles(styles)(Navigation);
