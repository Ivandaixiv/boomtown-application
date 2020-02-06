import { createStyles } from "@material-ui/styles";
const styles = theme =>
  createStyles({
    cardView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      height: "100vh",
      background: "white"
    }
  });

export default styles;
