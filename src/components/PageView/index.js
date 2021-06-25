import React from "react";
import { Link, withRouter } from "react-router-dom";
import useStyles from "./styles";
import { Container, Box, Typography } from "@material-ui/core";
import Logo from "../../svg/Logo";
import Dimensions from "react-dimensions";

function PageView(props) {
  const hasHeader = props.hasHeader === true ? true : false;
  const hasFooter = props.footer || false;

  const styles = useStyles();

  const goHome = () => {
    props.history.push("/");
  };

  return (
    <Box id="wrapper" className={styles.container}>
      {hasHeader && (
        <>
          <Box
            className={
              props.containerWidth <= 500
                ? styles.bgHeaderMobile
                : styles.bgHeader
            }
          ></Box>
          <Box
            className={
              props.containerWidth <= 500 ? styles.headerMobile : styles.header
            }
          >
            <Container maxWidth="lg">
              <Box
                className={
                  props.containerWidth <= 380
                    ? styles.headerTopMobile
                    : styles.headerTop
                }
              >
                <Link onClick={goHome} className={styles.logo}>
                  {" "}
                  <Logo className={styles.logoContent} />
                </Link>
                <Box
                  className={
                    props.containerWidth <= 500
                      ? styles.infoUserMobile
                      : styles.infoUser
                  }
                >
                  <Typography
                    component="span"
                    className={
                      props.containerWidth <= 500
                        ? styles.candidatoMobile
                        : styles.candidato
                    }
                  >
                    <Typography component="strong">Igor Baio </Typography>
                    Teste de Front-end
                  </Typography>
                  <Box
                    className={
                      props.containerWidth <= 500
                        ? styles.boxCbMobile
                        : styles.boxCb
                    }
                  >
                    <Typography
                      component="span"
                      className={
                        props.containerWidth <= 500
                          ? styles.userLabelMobile
                          : styles.userLabel
                      }
                    >
                      <Typography component="strong">CB </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {props.subHeader && (
                <Box className={styles.subHeader}>
                  <Box>{props.subHeader || null}</Box>
                </Box>
              )}
            </Container>
          </Box>
        </>
      )}
      <Box className={styles.page} style={props.stylePage}>
        <Container maxWidth="lg">
          <Box>{props.pageContent || null}</Box>
          {hasFooter && props.footer}
        </Container>
      </Box>

      <Box style={{ margin: 10, padding: 10 }} />
    </Box>
  );
}

export default Dimensions()(withRouter(PageView));
