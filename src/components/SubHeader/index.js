import React from "react";
import useStyles, { style } from "./styles";
import { Typography, Box, Grid } from "@material-ui/core";
import TextInput from "../TextInput";
import DateRangeIcon from "@material-ui/icons/DateRange";
export default function SubHeader({ history, title, subTitle }) {
  const styles = useStyles();
  return (
    // <Box className={styles.box}>
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
                />
              </Box>
    </Box>
  );
}
