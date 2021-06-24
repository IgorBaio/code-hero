import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  divCharacter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: colors.redMarvel,
    },
  },
  divHeroData:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
 
}));

export default useStyles;
