import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import {
  TextField,
  withStyles,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
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
    return errors;
  };

  onSubmit = values => {
    console.log("Submitted: ", values);
  };

  render() {
    console.log("Props: ", this.props);
    const { classes, tags } = this.props;

    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, submitting }) => {
          console.log("Pristine: ", submitting);
          return (
            <form onSubmit={handleSubmit}>
              <Typography variant="h3">Share. Borrow. Prosper.</Typography>
              <Field
                name="image"
                render={({ input, meta }) => (
                  <Button
                    color="primary"
                    {...input}
                    variant="contained"
                    component="label"
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
                      required
                      label="Name Your Item"
                      fullWidth={true}
                    />
                    {/* <TextField
                      {...input}
                      variant="outlined"
                      label="Name Your Item"
                      className={classes.textFields}
                    /> */}
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
                      required
                      label="Describe Your Item"
                      fullWidth={true}
                      multiline
                      rows="3"
                    />
                    {/* <TextField
                      variant="outlined"
                      {...input}
                      label="Password"
                      className={classes.textFields}
                    /> */}
                    {/* <input
                      placeholder="Type your password"
                      type="password"
                      name="password"
                      {...input}
                    /> */}
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <FormGroup row>
                {tags &&
                  tags.map(tag => (
                    <FormControlLabel
                      control={<Checkbox value="checkedA" />}
                      label={tag.title}
                    />
                  ))}
              </FormGroup>
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
