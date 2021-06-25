import PageView from "../../components/PageView";
import SubHeader from "../../components/SubHeader";
import TablesList from "../../components/TablesList";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Dimensions from "react-dimensions";
import Footer from "../../components/Footer";
import useStyles from "./styles";
import colors from "../../utils/colors";

function App(props) {
  const styles = useStyles();
  const [dataAux, setDataAux] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [indexPage, setIndexPage] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);
  const characters = useSelector(
    (state) => state.character.characters.data.results
  );

  const getArrayData = (items, quantity) => {
    return items.map((i, ind) => {
      if (ind < quantity) {
        return (
          <Box key={i.name + i.resourceURI} className={styles.divHeroData}>
            <Typography>{i.name}</Typography>
          </Box>
        );
      }
      return false;
    });
  };

  useEffect(() => {
    setQuantityPage(Array.from(Array(characters.length / 10).keys()));
    let arrayTemp = [];

    if (!!nameFilter) {
      arrayTemp = characters.filter((character, index) =>
        character.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    } else {
      arrayTemp = characters.filter(
        (character, index) =>
          index >= indexPage * 10 && index < (indexPage + 1) * 10
      );
    }
    const aux = arrayTemp.map((hero, index) => {
      const series = (
        <Box style={{ alignItems: "center" }}>
          {hero.series?.items.length > 0 ? (
            getArrayData(hero.series.items, 3)
          ) : (
            <Typography>Não há séries sobre o personagem</Typography>
          )}
        </Box>
      );

      const events = (
        <Box style={{ alignItems: "center" }}>
          {hero.events?.items.length > 0 ? (
            getArrayData(hero.events.items, 3)
          ) : (
            <Typography>Não há eventos sobre o personagem</Typography>
          )}
        </Box>
      );

      return {
        id: hero.id,
        character: {
          content: (
            <Box
              className={styles.divCharacter}
              onClick={() => {
                localStorage.setItem(
                  "pathImage",
                  `${hero.thumbnail.path}.${hero.thumbnail.extension}`
                );
                const seriesAux = getArrayData(
                  hero.series.items,
                  hero.series.items.length
                );
                const eventsAux = getArrayData(
                  hero.events.items,
                  hero.events.items.length
                );
                const comicsAux = getArrayData(
                  hero.comics.items,
                  hero.comics.items.length
                );
                localStorage.setItem("series", JSON.stringify(seriesAux));
                localStorage.setItem("events", JSON.stringify(eventsAux));
                localStorage.setItem("comics", JSON.stringify(comicsAux));
                localStorage.setItem("name", hero.name);
                props.history.push({
                  pathname: "/details",
                  hero,
                  image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
                });
              }}
            >
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                width={48}
                height={48}
              />
              <Typography
                component="span"
                style={{
                  color: colors.gray,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                {hero.name}
              </Typography>
            </Box>
          ),
        },
        series: {
          content: series,
        },
        events: {
          content: events,
        },
      };
    });
    setDataAux(aux);
  }, [nameFilter, indexPage]);

  if (props.containerWidth <= 500) {
    return (
      <PageView
        hasHeader
        TesteFooter
        subHeader={
          <SubHeader
            title={"Busca de personagens"}
            subTitle={"Nome do personagem"}
            setNameFilter={setNameFilter}
            containerWidth={props.containerWidth}
          />
        }
        pageContent={
          <Box className="App">
            <TablesList
              dataHeader={[
                {
                  id: "character",
                  label: "Personagem",
                  align: "left",
                  width: "33%",
                },
              ]}
              dataRows={dataAux}
            />
          </Box>
        }
        footer={
          <Footer
            setIndexPage={setIndexPage}
            quantityPage={quantityPage}
            indexPage={indexPage}
          />
        }
      />
    );
  }
  return (
    <PageView
      hasHeader
      subHeader={
        <SubHeader
          title={"Busca de personagens"}
          subTitle={"Nome do personagem"}
          setNameFilter={setNameFilter}
          containerWidth={props.containerWidth}
        />
      }
      pageContent={
        <div className="App">
          <TablesList
            dataHeader={[
              {
                id: "character",
                label: "Personagem",
                align: "left",
                width: "33%",
              },
              {
                id: "series",
                label: "Séries",
                align: "left",
                width: "33%",
              },
              {
                id: "events",
                label: "Eventos",
                align: "left",
                width: "33%",
              },
            ]}
            dataRows={dataAux}
          />
        </div>
      }
      footer={
        <Footer
          setIndexPage={setIndexPage}
          quantityPage={quantityPage}
          indexPage={indexPage}
        />
      }
    />
  );
}

export default Dimensions()(App);
