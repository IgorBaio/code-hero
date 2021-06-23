import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#666",
    width: "100%",
    height: 32,

    display: "flex",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    marginTop: 10,
    marginBottom: 10,
  },
  boxInput: {
    display: "flex",
    background: "#FFFFFF",
    borderRadius: 4,
    border: "2px solid blue",
    opacity: 1,
    padding: "0px 12px",
    whiteSpace: "nowrap",
    alignItems:'center'

    
  },
  icon: {
    // backgroundColor: "#fff",
    // marginLeft: "-40%",
    // marginRight: "5%",
    // border: "2px solid red",
    // [theme.breakpoints.down("sm")]: {
    //   marginLeft: "0",
    //   alignSelf: "flex-end",
    //   marginRight: "2%",
    //   justifyContent: "flex-start",
    //   marginTop: '%'
    // },
    // [theme.breakpoints.down("md")]: {
    //   marginLeft: "0",
    //   alignSelf: "flex-end",
    //   marginRight: "2%",
    //   justifyContent: "flex-start",
    //   marginTop: '-12%'
    // },
  },
}));

const style = {
  label: {
    color: "#c5c5c5",
    fontFamily: "Mulish",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: 12,
  },
  "&::placeholder": {
    color: "#666",
  },
};

export { style };
export default useStyles;
