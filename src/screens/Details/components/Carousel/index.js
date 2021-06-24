import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colors from "../../../../utils/colors";

const DATA_CAROUSEL = [
  { label: "Séries", value: "series" },
  { label: "Eventos", value: "events" },
  { label: "Revistas", value: "comics" },
];

function CarouselInfo({ history, optionClicked, setOptionClicked, indexPage }) {
  const styles = useStyles();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Box className={styles.boxContainer}>
      <Slider {...settings} className={styles.slider}>
        {DATA_CAROUSEL.map((item, index) => {
          return (
            <Button
              onClick={() => {
                setOptionClicked(item.value);
              }}
            >
              <Typography
                className={styles.buttonText}
                style={{
                  backgroundColor:
                    optionClicked === item.value ? colors.blue : colors.semiWhite,
                  color: optionClicked === item.value ? colors.darkSnow : colors.semiGray,
                  border:
                    optionClicked === item.value ? `2px solid ${colors.blue}` : "",
                }}
              >
                {item.label}
              </Typography>
            </Button>
          );
        })}
      </Slider>
    </Box>
  );
}

export default CarouselInfo;
