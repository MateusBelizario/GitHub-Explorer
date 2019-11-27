import { fade, makeStyles, createStyles } from "@material-ui/core/styles";
import { Colors } from "../../Theme/Colors";
import { Theme, colors } from "@material-ui/core";
import { appStyles } from "../../Theme/AppStyles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...appStyles,
    card: {
      maxWidth: 345
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
    avatar: {
      backgroundColor: Colors.salmon
    }
  })
);
