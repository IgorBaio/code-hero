import React from "react";
import { withRouter } from "react-router-dom";
import useStyles from "./styles";
import { Box, Typography, Button } from "@material-ui/core";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "@brainhubeu/react-carousel/lib/style.css";
import Dimensions from "react-dimensions";

function PageView({ quantityPage, setIndexPage, indexPage, containerWidth }) {
  const styles = useStyles();

  return (
    <Box
      style={{
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: 20,
      }}
    >
      <Carousel
        offset="10"
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: containerWidth >=500 ? 7.7 :  3.7,
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
        {quantityPage?.map((item, index) => {
          return (
            <Button
              style={{
                textTransform: "capitalize",
                margin: 10,
                borderRadius: 24,
                justifyContent: "center",
                alignItems: "center",
                border:
                indexPage === index
                  ? '1px solid #167ABC'
                  :
                  "",
                  backgroundColor:
                    indexPage ===index 
                        ? '#167ABC'
                        :
                    "#F5F5F5",
                width: 40,
                height: 32,
              }}
              onClick={() => {
                setIndexPage(index);
              }}
            >
              <Typography
                className={styles.buttonText}
                style={{
                  color:
                  indexPage ===index 
                        ? '#FFF'
                        :
                    "#555555",
                }}
              >
                {item + 1}
              </Typography>
            </Button>
          );
        })}
      </Carousel>
    </Box>
  );
}
export default Dimensions()(PageView);
