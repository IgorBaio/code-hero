import PageView from "../../components/PageView";
import SubHeader from "../../components/SubHeader";
import TablesList from "../../components/TablesList";
import React, { useState, useEffect } from "react";
import DATA from "../../Data";
import { Typography } from "@material-ui/core";
function App() {
  const [dataAux, setDataAux] = useState([]);
  const [dimension,setDimension] = useState({width: window.innerWidth, height:window.innerHeight})
  useEffect(() => {
    const { results } = DATA.data;
    const aux = results.map((item, index) => {
      const series = (
        <div style={{ alignItems: "center" }}>
          {item.series?.items.length > 0 ?item.series?.items?.map((i, ind) => {
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
          
          :
          <text>Não há séries sobre o personagem</text> 
        }
        </div>
      );
      
      const events = (
        <div style={{ alignItems: "center" }}>
          {item.events?.items.length > 0 ?  item.events.items.map((i, ind) => {
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
          :
          <text>Não há eventos sobre o personagem</text> 
        }
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
            onClick={()=>alert()}
          >
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} width={48} height={48} />
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
          content: events
        },
      };
    });
    setDataAux(aux);
  }, []);


  useEffect(()=>{
    console.log(window.innerWidth, window.innerHeight)
    setDimension({
      ...dimension,
      width: window.innerWidth,
      height: window.innerHeight
    })
  },[window.innerWidth, window.innerHeight])

  if(dimension.width <= 380 && dimension.height <= 812){
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
                }
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

export default App;
