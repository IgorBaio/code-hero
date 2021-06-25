import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageView from "../../components/PageView";
import Carousel from "./components/Carousel";
import Dimensions from "react-dimensions";
import useStyles from "./styles";

function HeroDetails({ containerWidth }) {
  const styles = useStyles();
  let location = useLocation();
  const { image } = location || null;
  const [imageUri, setImageUri] = useState(image);
  const [optionClicked, setOptionClicked] = useState(null);
  const [state, setState] = useState({});
  const getData = () => window.localStorage.getItem("pathImage");

  useEffect(() => {
    setImageUri(getData());
    setState({
      ...state,
      series: JSON.parse(localStorage.getItem("series") || "[]"),
      events: JSON.parse(localStorage.getItem("events") || "[]"),
      comics: JSON.parse(localStorage.getItem("comics") || "[]"),
      name: localStorage.getItem("name"),
    });
  }, []);

  return (
    <PageView
      hasHeader
      stylePage={{
        height: "100vh",
      }}
      pageContent={
        <div className={styles.divContainer}>
          <Box className={containerWidth <= 500 ? {} : styles.boxImageName}>
            <img
              src={imageUri}
              width={containerWidth <= 500 ? 200 : 250}
              height={containerWidth <= 500 ? 200 : 250}
              style={{
                margin: 40,
                alignSelf: "center",
              }}
            />
            <h2
              className={
                containerWidth <= 500 ? styles.nameMobile : styles.name
              }
            >
              {state.name}
            </h2>
          </Box>
          <Carousel
            optionClicked={optionClicked}
            setOptionClicked={setOptionClicked}
          />
          <Box className={styles.boxData}>
            {optionClicked ? (
              state[optionClicked] && state[optionClicked].length > 0 ? (
                state[optionClicked].map((i) => {
                  
                  return (
                    <div key={i.key} className={styles.divHeroData}>
                      <div className={styles.divCircleIcon} />
                      <Typography className={styles.textData}>
                        {i.props.children.props.children}
                      </Typography>
                    </div>
                  );
                })
              ) : (
                <div className={styles.divNotFoundData}>
                  <div className={styles.divCircleIcon} />
                  <Typography className={styles.notFoundDataText}>
                    Não há este tipo de dado sobre o personagem
                  </Typography>
                </div>
              )
            ) : (
              false
            )}
          </Box>
        </div>
      }
    />
  );
}

export default Dimensions()(HeroDetails);
