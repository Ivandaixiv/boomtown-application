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
      width: "18vw"
    },
    textSpace: {
      marginLeft: 25
    }
  });

export default styles;
