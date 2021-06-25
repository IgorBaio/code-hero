import React from "react";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

export default function TextInput(props) {
  const styles = useStyles();

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.divInput}>
        <Input
          inputProps={{
            className: styles.input,
          }}
          id={props.id}
          {...props}
        />
        <SearchIcon />
      </div>
    </div>
  );
}
