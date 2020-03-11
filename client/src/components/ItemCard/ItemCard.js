import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";
import Gravatar from "react-gravatar";
import styles from "./styles";
import moment from "moment";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ItemCard = props => {
  const { item, classes } = props;
  return (
    <Card className={classes.card}>
      <NavLink
        to={(item.itemowner && `/profile/` + item.itemowner.id) || "#"}
        color="secondary"
        underline="none"
        className={classes.link}
      >
        <CardActionArea>
          <CardMedia
            image={
              item.imageurl ? item.imageurl : "https://picsum.photos/1920/1080"
            }
            title="placeholder"
            className={classes.media}
          />
          <CardContent className={classes.text}>
            <div className={classes.intro}>
              <Typography>
                <Gravatar
                  email={
                    (item && item.itemowner.email && item.itemowner.email) ||
                    item.email
                  }
                  className={classes.profile}
                />
              </Typography>
              <div>
                <Typography>
                  {(item && item.itemowner && item.itemowner.fullname) ||
                    "Your Name"}
                </Typography>
                <Typography>
                  {item && moment(item.created).fromNow()}
                </Typography>
              </div>
            </div>
            <Typography className={classes.title}>
              {item && item.title}
            </Typography>
            <div className={classes.tagsContainer}>
              {item.tags &&
                item.tags.map(tag => {
                  return (
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      key={tag.id}
                      className={classes.tags}
                    >
                      {tag.title}
                    </Typography>
                  );
                })}
            </div>
            <Typography>{item && item.description}</Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <CardActions>
        <Button size="large" className={classes.button}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    imageurl: PropTypes.string,
    description: PropTypes.string,
    created: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object),
    itemowner: PropTypes.object,
    borrower: PropTypes.object
  }),
  classes: PropTypes.object
};
export default withStyles(styles)(ItemCard);
