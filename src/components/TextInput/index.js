import React from "react";
import { Input, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

export default function TextInput(props) {
  const styles = useStyles();

  return (
    <Box className={styles.inputWrapper}>
      <Box className={styles.boxInput}>
        <Input
          inputProps={{
            className: styles.input,
          }}
          id={props.id}
          {...props}
        />
        <SearchIcon />
      </Box>
    </Box>
  );
}
