import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import styled from 'styled-components';
// import Menu from '../../components/Menu';
// import Footer from '../../components/Footer';
// import BannerMain from '../../components/BannerMain';
import { useLocation } from "react-router-dom";
import PageView from "../../components/PageView";
import SubHeader from "../../components/SubHeader";

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

function BookDetails({ history }) {
  const styles = useStyles();
  let location = useLocation();
  const { item, image } = location || null;
  const [imageUri, setImageUri] = useState(image);
  const [optionClicked, setOptionClicked] = useState(null);
  const [state, setState] = useState({});
  const saveData = () => {
    localStorage.setItem("pathImage", image);
  };
  const getData = () => window.localStorage.getItem("pathImage");

  useEffect(() => {
   
      // const getDat =  () =>  localStorage.getItem('pathImage')
      setImageUri(getData());
      setState({
        ...state,
        series:JSON.parse(localStorage.getItem("series") || "[]"),
        events:JSON.parse(localStorage.getItem("events") || "[]"),
        comics:JSON.parse(localStorage.getItem("comics") || "[]")
      })
  }, []);

  return (
    <PageView
      hasHeader
      pageContent={
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Box>
            <img
              src={imageUri}
              width={150}
              height={150}
              style={{
                margin: 40,
                alignSelf: "center",
              }}
            />
          </Box>
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
                    numberOfSlides: 2,
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
                console.log(optionClicked,item.value)
                return (
                  <Button
                    style={{
                      backgroundColor: "#F2F2F2",
                      textTransform: "capitalize",
                      margin: 10,
                      borderRadius: 24,
                      justifyContent: "center",
                      alignItems: "center",
                      border:
                        optionClicked === item.value
                          ? "2px solid purple"
                          : "",
                      width: 200,
                      height: 48,
                    }}
                    onClick={() => {
                      setOptionClicked(item.value);
                    }}
                  >
                    <Typography
                      className={styles.buttonText}
                      style={{
                        color:
                          optionClicked === item.value
                            ? "red"
                            : "#C4C4C4",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Button>
                );
              })}
            </Carousel>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {optionClicked && state[optionClicked] &&
              state[optionClicked].map((i) => {

                console.log(state[optionClicked][0].props)
                // console.log('i',i)
                return (
                  <div 
                    style={i.props.style}
                  >
                    <div style={{
          height: 4,
          width: 4,
          marginHorizontal:10,
          borderRadius:10,
          backgroundColor: '#666',
        }}/>
                    <Typography style={{
                      color:'#555555',
                      fontWeight:'bold',
                      margin: 5,
                    }}>

                    {i.props.children.props.children}
                    </Typography>
                  </div>
                )
              })}
          </Box>
        </div>
      }
    />
  );
}

export default BookDetails;
