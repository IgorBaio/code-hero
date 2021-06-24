import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
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
    color: "#555555",
    fontSize: 32,
    fontWeight: 800,
    alignSelf: "flex-start",
    fontFamily: "PT Sans",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },
  pageSubTitle: {
    color: "#555555",
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: 800,
    fontFamily: "PT Sans",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },
  boxTextInput: {
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
