import React from "react";
import useStyles from "./styles";
import { Typography, Box } from "@material-ui/core";
import TextInput from "../TextInput";

export default function SubHeader({
  title,
  subTitle,
  setNameFilter,
}) {
  const styles = useStyles();
  
  return (
    <Box className={styles.box}>
      <Typography align="left" className={styles.pageTitle}>
        {title}
      </Typography>
      <Typography align="left" className={styles.pageSubTitle}>
        {subTitle}
      </Typography>
      <Box className={styles.boxTextInput}>
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
