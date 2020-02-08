import { createStyles } from "@material-ui/styles";
const styles = theme =>
  createStyles({
    logo: {
      width: 45
    },
    gap: {
      margin: "5px 0",
      transform: "scale(.85)"
    },
    add: {
      borderRadius: 50
    },
    split: {
      display: "flex",
      justifyContent: "space-between"
    },
    dropMenuItems: {
      width: "200px"
    },
    textSpace: {
      marginLeft: 25
    },
    link: {
      color: "#212121"
    }
  });

export default styles;
