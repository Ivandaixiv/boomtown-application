import { createStyles } from "@material-ui/styles";
const styles = () =>
  createStyles({
    card: {
      width: 500
    },
    media: {
      height: 250
    },
    text: {
      height: "10rem",
      margin: "10px 0px 30px 10px"
    },
    button: {
      border: "1px solid rgba(0, 0, 0, 0.25)"
    },
    intro: {
      display: "flex"
    },
    profile: {
      borderRadius: 50,
      margin: "0 20px 0 0"
    },
    title: {
      fontSize: 28
    },
    tags: {
      width: "90%",
      display: "flex",
      justifyContent: "space-between"
    }
  });
export default styles;
