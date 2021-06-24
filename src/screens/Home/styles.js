import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divCharacter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: "#F0141E",
    },
  },
  boxImageName: { display: "flex" },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  name: {
    margin: "20%",
    marginLeft: "5%",
    color: "#555555",
    fontWeight: "bold",
  },
  nameMobile: {
    margin: "5%",
    marginLeft: "25%",
    color: "#555555",
    fontWeight: "bold",
  },

  buttonText: {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 16,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  carouselButtons: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: "#c2c2c2",
  },
}));

export default useStyles;
