import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageView from "../../components/PageView";
import Carousel from "./components/Carousel";
import Dimensions from 'react-dimensions'
import useStyles from "./styles";

const DATA_CAROUSEL = [
  { label: "Séries", value: "series" },
  { label: "Eventos", value: "events" },
  { label: "Revistas", value: "comics" },
];

function HeroDetails({ history, containerWidth }) {
  const styles = useStyles();
  let location = useLocation();
  const { item, image } = location || null;
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
      pageContent={
        <div 
          className={styles.divContainer}
        >
          <Box className={containerWidth<= 300 ? {} : styles.boxImageName}>
            <img
              src={imageUri}
              width={150}
              height={150}
              style={{
                margin: 40,
                alignSelf: "center",
              }}
            />
            <h2
              className={containerWidth<= 300 ?
                styles.nameMobile : styles.name
                }
            >
              {state.name}
            </h2>
          </Box>
          <Carousel
            optionClicked={optionClicked}
            setOptionClicked={setOptionClicked}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {optionClicked ? (
              state[optionClicked] && state[optionClicked].length > 0 ? (
                state[optionClicked].map((i) => {
                  console.log(i)
                  return (
                    <div key={i.key} style={i.props.style}>
                      <div
                        style={{
                          height: 4,
                          width: 4,
                          marginHorizontal: 10,
                          borderRadius: 10,
                          backgroundColor: "#666",
                        }}
                      />
                      <Typography
                        style={{
                          color: "#555555",
                          fontWeight: "bold",
                          margin: 5,
                        }}
                      >
                        {i.props.children.props.children}
                      </Typography>
                    </div>
                  );
                })
              ) : (
                <div style={{ alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <text>Não há este tipo de dado sobre o personagem</text>
                  </div>
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
