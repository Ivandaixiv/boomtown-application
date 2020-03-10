export default function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!this.state.formToggle && !values.fullname) {
    errors.fullname = "Required";
  }
  return errors;
}
