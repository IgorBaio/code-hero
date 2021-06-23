import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#E2E2E2",
    width: "100%",
    height: "100%",
    maxWidth: "100vw",
  },
  header: {
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
      // marginTop:'5%'
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-4%",
    },
  },
  userLabel: {
    color: "#555555",
    fontWeight: 400,
    "& strong": {
      fontWeight: 800,
    },
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

  subHeader: {
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 3,
    },
    // "& div": {
    // },
  },
  page: {
    position: "relative",
    height: "100",
    zIndex: 100,
  },
}));

export default useStyles;
