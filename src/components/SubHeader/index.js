import React from "react";
import useStyles from "./styles";
import { Typography, Box } from "@material-ui/core";
import TextInput from "../TextInput";

const SubHeader = ({
  title,
  subTitle,
  setNameFilter,
  containerWidth
}) => {
  const styles = useStyles();
  
  return (
    <Box className={styles.box} style={containerWidth<=500 ? {marginTop:'10%'}: {}}>
      <Typography align="left" className={styles.pageTitle}>
        {title}
      </Typography>
      <Typography align="left" className={styles.pageSubTitle}>
        {subTitle}
      </Typography>
      <Box className={styles.boxTextInput} style={containerWidth<=500 ? {marginLeft:'20%'}:{}}>
        <TextInput
          id="heroName"
          placeholder="Digite..."
          disableUnderline
          onChange={(event) => {
            setNameFilter(event.target.value);
          }}
        />
      </Box>
    </Box>
  );
}
export default SubHeader;