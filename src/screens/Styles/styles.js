import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: "100vh",
  },
  title:{
    color: colors.darkSmoke,
    fontWeight: "bold",
    margin: 5,
  },
  divHeroData:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  divImageName: {
    display: "flex",
    justifyContent: "center",
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
  
}));

export default useStyles;
