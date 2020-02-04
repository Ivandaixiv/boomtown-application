import { createStyles } from "@material-ui/styles";
const styles = theme =>
  createStyles({
    form: {
      width: "450px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "90%"
    },
    tagIcons: {
      display: "flex"
    },
    button: {
      width: "25%"
    }
  });

export default styles;
