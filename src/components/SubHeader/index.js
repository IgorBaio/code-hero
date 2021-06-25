import React from "react";
import useStyles from "./styles";
import TextInput from "../TextInput";

const SubHeader = ({ title, subTitle, setNameFilter, containerWidth }) => {
  const styles = useStyles();

  return (
    <div
      className={styles.div}
      style={containerWidth <= 500 ? { marginTop: "10%" } : {}}
    >
      <text align="left" className={styles.pageTitle}>
        {title}
      </text>
      <text align="left" className={styles.pageSubTitle}>
        {subTitle}
      </text>
      <div
        className={styles.divTextInput}
        style={containerWidth <= 500 ? { marginLeft: "20%" } : {}}
      >
        <TextInput
          id="heroName"
          placeholder="Digite..."
          disableUnderline
          onChange={(event) => {
            setNameFilter(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default SubHeader;
