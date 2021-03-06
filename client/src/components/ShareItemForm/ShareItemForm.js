import React, { Component } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import {
  TextField,
  withStyles,
  Typography,
  Button,
  FormGroup,
  FormControl,
  FormLabel
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import HomeIcon from "@material-ui/icons/Home";
import styles from "./styles";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

class ShareForm extends Component {
  validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.tags) {
      errors.tagsContainer = "Required";
    }
    return errors;
  };

  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };
  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };
  render() {
    const { classes, tags, history } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => (
          <Mutation mutation={ADD_ITEM_MUTATION}>
            {addItem => (
              <Form
                onSubmit={async values => {
                  try {
                    await addItem({
                      variables: {
                        item: {
                          ...values,
                          tags: this.applyTags(values.tags || [], tags)
                        }
                      }
                    });
                    history.push("/profile");
                  } catch (error) {
                    throw error;
                  }
                }}
                validate={this.validate}
                render={({ handleSubmit, pristine, submitting }) => (
                  <form onSubmit={handleSubmit} className={classes.form}>
                    <FormSpy
                      subscription={{ values: true }}
                      onChange={({ values }) => {
                        if (values) {
                          this.dispatchUpdate(values, tags, updatePreview);
                        }
                        return "";
                      }}
                    />
                    <Typography variant="h3">
                      Share. Borrow. Prosper.
                    </Typography>
                    <Field
                      name="image"
                      render={({ input, meta }) => (
                        <Button
                          color="primary"
                          variant="contained"
                          fullWidth={true}
                        >
                          Select An Image
                          <input type="file" style={{ display: "none" }} />
                        </Button>
                      )}
                    ></Field>
                    <Field
                      name="title"
                      render={({ input, meta }) => (
                        <div className="inputBox">
                          <TextField
                            {...input}
                            label="Name Your Item"
                            fullWidth={true}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    />
                    <Field
                      name="description"
                      render={({ input, meta }) => (
                        <div className="inputBox">
                          <TextField
                            {...input}
                            label="Describe Your Item"
                            fullWidth={true}
                            multiline
                            rows="3"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    />
                    <FormControl>
                      <FormLabel>Add Tags: </FormLabel>
                      <FormGroup row>
                        <label>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Household Items"
                          />
                          Household Items
                          <HomeIcon />
                        </label>
                        <label>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Electronics"
                          />
                          Electronics
                          <HomeIcon />
                        </label>
                        <label>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Tools"
                          />
                          Tools
                          <HomeIcon />
                        </label>
                        <label>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Physical Media"
                          />
                          Physical Media
                          <HomeIcon />
                        </label>
                        <label>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Sporting Goods"
                          />
                          Sporting Goods
                          <HomeIcon />
                        </label>
                        <label>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Musical Instruments"
                          />
                          Musical Instruments
                          <HomeIcon />
                        </label>
                        <label>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Recreational Equipment"
                          />
                          Recreational Equipment
                          <HomeIcon />
                        </label>
                      </FormGroup>
                    </FormControl>

                    <Field
                      name="submit"
                      render={(input, meta) => (
                        <Button
                          type="submit"
                          name="share"
                          color="primary"
                          variant="contained"
                          disabled={submitting || pristine}
                          className={classes.button}
                          {...input}
                        >
                          Share
                        </Button>
                      )}
                    />
                  </form>
                )}
              />
            )}
          </Mutation>
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}
ShareForm.propTypes = {
  props: PropTypes.exact({
    tags: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  })
};
export default withRouter(withStyles(styles)(ShareForm));
