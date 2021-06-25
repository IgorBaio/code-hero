import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../../utils/colors";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,

  },
  slider: {
    alignSelf: "center",
    marginLeft: "10%",
    marginRight: "10%",
  },
  buttonText: {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    textTransform: "capitalize",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  carouselButtons: {
    backgroundColor: colors.gray,
    borderWidth: 0,
    color: "#c2c2c2",
  },
}));

export default useStyles;
