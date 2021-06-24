import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#666",
    width: "100%",
    height: 32,
    display: "flex",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    margin: 10,
  },
  boxInput: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    opacity: 1,
    padding: "0px 12px",
    whiteSpace: "nowrap",
    alignItems: "center",
    width: "100%",
  },
}));

export default useStyles;
