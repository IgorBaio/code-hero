import { makeStyles } from "@material-ui/core/styles";

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
    color: "#555555",
    fontWeight: "bold",
  },
  nameMobile: {
    margin: "5%",
    marginBottom: "10%",
    marginLeft: "25%",
    color: "#555555",
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
    backgroundColor: "#666",
  },
  textData: {
    color: "#555555",
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
    color: "#555555",
    fontWeight: "bold",
    margin: 5,
    textDecorationLine: "underline",
    textDecorationColor: "#F0141E",
  },
}));

export default useStyles;
