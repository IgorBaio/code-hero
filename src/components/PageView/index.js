import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Link, withRouter } from "react-router-dom";
// import ROUTES from '../../utils/routes'
import useStyles from "./styles";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { style } from "../SubHeader/styles";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import Logo from "../../svg/Logo";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "@brainhubeu/react-carousel/lib/style.css";
import Dimensions from "react-dimensions";
function PageView(props) {
    console.log(props)
  const hasHeader = props.hasHeader === true ? true : false;
  const hasFooter = props.hasFooter === true ? true : false;

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
              props.containerWidth <= 300
                ? styles.bgHeaderMobile
                : styles.bgHeader
            }
          ></Box>
          <Box
            className={
              props.containerWidth <= 300 ? styles.headerMobile : styles.header
            }
          >
            <Container maxWidth="lg">
              <Box
                className={
                  props.containerWidth <= 300
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
                    props.containerWidth <= 300
                      ? styles.infoUserMobile
                      : styles.infoUser
                  }
                >
                  <Typography
                    component="span"
                    className={
                      props.containerWidth <= 300
                        ? styles.candidatoMobile
                        : styles.candidato
                    }
                  >
                    <Typography component="strong">Igor Baio </Typography>
                    Teste de Front-end
                  </Typography>
                  <Box
                    className={
                      props.containerWidth <= 300
                        ? styles.boxCbMobile
                        : styles.boxCb
                    }
                  >
                    <Typography
                      component="span"
                      className={
                        props.containerWidth <= 300
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
      <Box className={[styles.page, props.stylePage]}>
        <Container maxWidth="lg">
          <Box>{props.pageContent || null}</Box>
      {hasFooter && (
          
          <Box
            style={{
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              // marginLeft: '40%'
              margin: 20,
            }}
          >
            <Carousel
              offset="10"
              plugins={[
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3.85,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button className={styles.carouselButtons}>
                        <DoubleArrowIcon
                          style={{
                            transform: "rotate(180deg)",
                            backgroundColor: "transparent",
                          }}
                        />{" "}
                      </button>
                    ),
                    arrowLeftDisabled: (
                      <button className={styles.carouselButtons}>
                        <ArrowBackIos />
                      </button>
                    ),
                    arrowRight: (
                      <button className={styles.carouselButtons}>
                        <DoubleArrowIcon />
                      </button>
                    ),
                    arrowRightDisabled: (
                      <button className={styles.carouselButtons}>
                        <ArrowForwardIos />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
            >
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <Button
                    style={{
                      backgroundColor: "#F2F2F2",
                      textTransform: "capitalize",
                      margin: 10,
                      borderRadius: 24,
                      justifyContent: "center",
                      alignItems: "center",
                      //optionsTables.includes(item)
                      border:
                        // ? '1px solid purple'
                        // :
                        "",
                      width: 40,
                      height: 32,
                    }}
                    onClick={() => {
                      //TODO colocar o contorloador num redux
                      // if (optionsTables.includes(item)) {
                      //     const arrayRemoveItem =
                      //         optionsTables.filter(
                      //             value => value !== item
                      //         )
                      //     console.log(
                      //         'arrayRemoveItem',
                      //         arrayRemoveItem
                      //     )
                      //     console.log(
                      //         'optionsTables',
                      //         optionsTables
                      //     )
                      //     setOptionsTables(arrayRemoveItem)
                      // } else {
                      //     setOptionsTables([
                      //         ...optionsTables,
                      //         item,
                      //     ])
                      //     setStepTwoVisible(true)
                      // }
                    }}
                  >
                    <Typography
                      className={styles.buttonText}
                      style={{
                        color:
                          // optionsTables.includes(item)
                          //     ? 'purple'
                          //     :
                          "#C4C4C4",
                      }}
                    >
                      {item}
                    </Typography>
                  </Button>
                );
              })}
            </Carousel>
          </Box>
       
      )}
        </Container>
      </Box>
      
      <Box style={{ margin: 10, padding: 10 }} />
    </Box>
  );
}
export default Dimensions()(withRouter(PageView));
