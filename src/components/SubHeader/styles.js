import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    // alignSelf: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      marginTop:'4%',
      width:'100%',
    },
  },
  pageTitle: {
    color: "#555555",
    fontSize: 32,
    fontWeight: 800,
    alignSelf: "flex-start",
    fontFamily: "Mulish",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },
  pageSubTitle: {
    color: "#555555",
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: 800,
    fontFamily: "Mulish",
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
      maxWidth: "90%",
      whiteSpace: 'nowrap',
      maxHeight:32,

    },
  },
}));

const style = {
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
};
export { style };
export default useStyles;
