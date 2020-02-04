import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import {
  TextField,
  withStyles,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel
} from "@material-ui/core";
import styles from "./styles";

class ShareForm extends Component {
  validate = values => {
    console.log("Values: ", values);
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.tags) {
      errors.tags = "Required";
    }
    return errors;
  };

  onSubmit = values => {
    console.log("Submitted: ", values);
  };

  render() {
    // console.log("Props: ", this.props);
    const { classes, tags } = this.props;

    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, submitting }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Typography variant="h3">Share. Borrow. Prosper.</Typography>
              <Field
                name="image"
                render={({ input, meta }) => (
                  <Button
                    color="primary"
                    {...input}
                    variant="contained"
                    fullWidth={true}
                  >
                    Select An Image
                    <input type="file" style={{ display: "none" }} />
                  </Button>
                )}
              ></Field>
              <Field
                name="name"
                render={({ input, meta }) => (
                  <div className="inputBox">
                    <TextField
                      {...input}
                      label="Name Your Item"
                      fullWidth={true}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <FormControl>
                <FormLabel>Add Tags: </FormLabel>
                <FormGroup row>
                  {tags.map(tag => {
                    return (
                      <FormControlLabel
                        key={tag.id}
                        control={
                          <Field
                            name="tags"
                            type="checkbox"
                            value={tag.title}
                            component="input"
                          />
                        }
                        label={tag.title}
                      />
                    );
                  })}
                </FormGroup>
              </FormControl>

              {/* <Field
                name="listTags"
                type="checkbox"
                render={({ input, meta }) => (
                  <FormControl>
                    <FormLabel>Add Tags: </FormLabel>
                    <FormGroup row>
                      {tags &&
                        tags.map(tag => (
                          <FormControlLabel
                            {...input}
                            key={tag.id}
                            control={
                              <Checkbox key={tag.id} value={tag.title} />
                            }
                            label={tag.title}
                            value="{tag.title}"
                          />
                        ))}
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </FormGroup>
                  </FormControl>
                )}
              /> */}
              <Field
                name="submit"
                render={(input, meta) => (
                  <Button
                    {...input}
                    type="submit"
                    name="share"
                    value="Share"
                    color="primary"
                    variant="contained"
                    disabled={submitting || pristine}
                  >
                    Share
                  </Button>
                )}
              ></Field>
            </form>
          );
        }}
      />
    );
  }
}
export default withStyles(styles)(ShareForm);
