import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      marginTop: "4%",
      width: "100%",
    },
  },
  pageTitle: {
    color: colors.darkSmoke,
    fontSize: 32,
    fontWeight: 800,
    alignSelf: "flex-start",
    fontFamily: "PT Sans",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },
  pageSubTitle: {
    color: colors.darkSmoke,
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: 800,
    fontFamily: "PT Sans",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },
  divTextInput: {
    display: "flex",
    width: "100%",
    alignSelf: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      whiteSpace: "nowrap",
      maxHeight: 32,
    },
  },
}));

export default useStyles;
