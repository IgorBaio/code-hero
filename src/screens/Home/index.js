import PageView from "../../components/PageView";
import SubHeader from "../../components/SubHeader";
import TablesList from "../../components/TablesList";
import React, { useState, useEffect } from "react";
import DATA from "../../Data";
import { Typography } from "@material-ui/core";
import Dimensions from "react-dimensions";
// import useDimensions from 'use-react-dimensions';

function App(props) {
  const [dataAux, setDataAux] = useState([]);
  const [dimension, setDimension] = useState({
    width: props.containerWidth,
    height: props.containerHeight,
  });
  
  console.log("dimension", dimension);

  const getArrayData = (items,  quantity) => {
   
      return items.map((i, ind) => {
        if (ind < quantity) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <text>{i.name}</text>
            </div>
          );
        }
        return false;
      })
    
  }

  useEffect(() => {
    const { results } = DATA.data;
    const arrTemp = results.filter((it,ind)=>ind<10)
    const aux = arrTemp.map((item, index) => {
      const series = (
        <div style={{ alignItems: "center" }}>
          {item.series?.items.length > 0 ? (
            item.series?.items?.map((i, ind) => {
              if (ind < 3) {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <text>{i.name}</text>
                  </div>
                );
              }
              return false;
            })
          ) : (
            <text>Não há séries sobre o personagem</text>
          )}
        </div>
      );

      const events = (
        <div style={{ alignItems: "center" }}>
          {item.events?.items.length > 0 ?
          getArrayData(item.events.items, 3) :
          <text>Não há eventos sobre o personagem</text>}
        </div>
      );
      const comics = (
        <div style={{ alignItems: "center" }}>
          {item.comics?.items.length > 0 ? (
            item.comics.items.map((i, ind) => {
              if (ind < 3) {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <text>{i.name}</text>
                  </div>
                );
              }
              return false;
            })
          ) : (
            <text>Não há revistas sobre o personagem</text>
          )}
        </div>
      );

      return {
        id: item.id,
        character: {
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              onClick={() => {
                localStorage.setItem("pathImage", `${item.thumbnail.path}.${item.thumbnail.extension}`);
                const seriesAux = getArrayData(item.series.items, item.series.items.length)
                const eventsAux = getArrayData(item.events.items, item.events.items.length)
                const comicsAux = getArrayData(item.comics.items, item.comics.items.length)
                localStorage.setItem("series", JSON.stringify(seriesAux));
                localStorage.setItem("events", JSON.stringify(eventsAux));
                localStorage.setItem("comics", JSON.stringify(comicsAux));
                props.history.push({
                  pathname: "/details",
                  item,
                  image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                });
              }}
            >
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                width={48}
                height={48}
              />
              <Typography
                component="span"
                style={{ color: "#666", fontWeight: "bold", marginLeft: 10 }}
              >
                {item.name}
              </Typography>
            </div>
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
  }, []);

  useEffect(() => {
    setDimension({
      ...dimension,
      width: props.containerWidth,
      height: props.containerHeight,
    });
  }, [props.containerWidth, props.containerHeight]);

  if (dimension.width <= 380) {
    return (
      <PageView
      hasHeader
      hasFooter={true}
        subHeader={
          <SubHeader
            title={"Busca de personagens"}
            subTitle={"Nome do personagem"}
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
              ]}
              dataRows={dataAux}
            />
          </div>
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
    />
  );
}

export default Dimensions()(App);
