import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: "100vh",
  },
  divHeroData:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  boxImageName: {
    display: "flex",
    justifyContent: "center",
  },
  name: {
    alignSelf: "center",
    marginLeft: "5%",
    color: colors.darkSmoke,
    fontWeight: "bold",
  },
  nameMobile: {
    margin: "5%",
    marginBottom: "10%",
    marginLeft: "25%",
    color: colors.darkSmoke,
    fontWeight: "bold",
  },
  boxData: {
    marginTop: "10px",
    height: "100vh",
  },
  divCircleIcon: {
    height: 4,
    width: 4,
    borderRadius: 10,
    backgroundColor: colors.gray,
  },
  textData: {
    color: colors.darkSmoke,
    fontWeight: "bold",
    margin: 5,
  },
  divNotFoundData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20px",
  },
  notFoundDataText: {
    color: colors.darkSmoke,
    fontWeight: "bold",
    margin: 5,
    textDecorationLine: "underline",
    textDecorationColor: colors.redMarvel,
  },
}));

export default useStyles;
