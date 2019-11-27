import { fade, makeStyles, createStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/Colors";
import { Theme, colors } from "@material-ui/core";
import { appStyles } from "../../Theme/AppStyles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...appStyles,
    loginLabel: {
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-2"
    },
    githubIcon: {
      color: "#000000"
    },
    repositoriesLabel: {
      marginLeft: "20px"
    },
    card: {
      width: "25%",
      margin: "25px"
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    informationContainer: {
      margin: 0,
      padding: "10px",
      width: "100%"
    },
    collapseContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    avatar: {
      backgroundColor: Colors.salmon
    },
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);
