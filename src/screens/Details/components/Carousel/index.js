import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "@brainhubeu/react-carousel/lib/style.css";
import useStyles from "./styles";

const DATA_CAROUSEL = [
  { label: "Séries", value: "series" },
  { label: "Eventos", value: "events" },
  { label: "Revistas", value: "comics" },
];

function CarouselInfo({ history, optionClicked, setOptionClicked, indexPage }) {
  const styles = useStyles();
  return (
    <Box
      style={{
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Carousel
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2.7,
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
        {DATA_CAROUSEL.map((item, index) => {
          return (
            <Button
              style={{
                backgroundColor:
                  optionClicked === item.value ? "#167ABC" : "#F2F2F2",
                textTransform: "capitalize",
                margin: 10,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                border: optionClicked === item.value ? "2px solid #167ABC" : "",
                width: '40%',
                height: 48,
              }}
              onClick={() => {
                setOptionClicked(item.value);
              }}
            >
              <Typography
                className={styles.buttonText}
                style={{
                  color: optionClicked === item.value ? "#e5e5e5" : "#444",
                }}
              >
                {item.label}
              </Typography>
            </Button>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default CarouselInfo;
