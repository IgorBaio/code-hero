import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    width: "52%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom:'20%'
  },
  pagination: {
    alignSelf: "center",
    width: "100%",
    marginLeft:'50%',
    marginRight:'50%',
  },
}));

export default useStyles;
