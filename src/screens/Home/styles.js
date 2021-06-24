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
  divHeroData:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
 
}));

export default useStyles;
