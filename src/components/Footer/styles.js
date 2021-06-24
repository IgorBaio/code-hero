import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    width: "52%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  pagination: {
    alignSelf: "center",
    width: "100%",
    marginLeft:'50%',
    marginRight:'50%',
  },
  headerMobile: {
    position: "relative",
    zIndex: 10,
  },
  bgHeader: {
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "#fff",
    height: "9%",
    position: "absolute",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      height: "12%",
    },
  },
  bgHeaderMobile: {
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "#fff",
    position: "absolute",
    width: "100vw",
    height: "24%",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 35,
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      height: "20%",
    },
  },
  headerTopMobile: {
    marginTop: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    height: "45%",
  },
  logo: {
    marginBottom: "2%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: "-3%",
    },
  },

  candidato: {
    color: "#555555",
    fontWeight: 400,
    "& strong": {
      fontWeight: 800,
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: 10,
      height: "20%",
      marginRight: -20,
      marginLeft: 12,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-4%",
    },
  },
  candidatoMobile: {
    color: "#555555",
    fontWeight: 400,
    "& strong": {
      fontWeight: 800,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
  userLabel: {
    color: "#555555",
    fontWeight: 400,
    "& strong": {
      fontWeight: 800,
    },
  },
  userLabelMobile: {
    color: "#555555",
    fontWeight: 400,
    "& strong": {
      fontWeight: 800,
    },
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
  },
  boxCb: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    height: "15%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3%",
    },
  },
  boxCbMobile: {
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    height: "15%",
    marginTop: "3%",
    width: "85%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  infoUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      justifyContent: "flex-end",
      marginTop: "-3%",
    },
  },
  infoUserMobile: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: "-3%",
  },

  subHeader: {
    marginTop: "2%",
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 3,
    },
  },
  carouselButtons: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: "#c2c2c2",
  },
  page: {
    position: "relative",
    height: "100%",
    zIndex: 100,
  },
}));

export default useStyles;
