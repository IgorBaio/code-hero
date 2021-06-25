import PageView from "../../components/PageView";
import React from "react";
import Dimensions from "react-dimensions";
import useStyles from "./styles";
import colors from "../../utils/colors";
import DATA_STYLES_GUIDE from "../../Data/styles-guide.json";

function Styles(props) {
  const styles = useStyles();

  return (
    <PageView
      hasHeader
      pageContent={
        <div className={styles.divContainer}>
          <h2 className={styles.title} style={{ marginTop: 100 }}>
            FONTES:
          </h2>
          {DATA_STYLES_GUIDE.fonts.map((i, index) => {
            return (
              <div key={i.key} className={styles.divHeroData}>
                <div className={styles.divCircleIcon} />
                <text className={styles.textData}>
                  {i.label}:{" "}
                  <text style={{ fontFamily: i.value }}>{i.value}</text>
                </text>
              </div>
            );
          })}
          <h2 className={styles.title}>CORES:</h2>
          {DATA_STYLES_GUIDE.colors.map((i, index) => {
            return (
              <div key={i.key} className={styles.divHeroData}>
                <div className={styles.divCircleIcon} />
                <text className={styles.textData}>
                  {i.label}:{" "}
                  <text
                    style={{
                      color: i.value,
                      backgroundColor:
                        i.label === "white" ||
                        i.label === "semi-white" ||
                        i.label === "snow" ||
                        i.label === "dark-snow" ||
                        i.label === "light-gray"
                          ? colors.gray
                          : "",
                    }}
                  >
                    {i.value}
                  </text>
                </text>
              </div>
            );
          })}
        </div>
      }
    />
  );
}

export default Dimensions()(Styles);
