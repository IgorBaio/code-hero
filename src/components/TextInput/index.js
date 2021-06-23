import React from "react";
import {
  Input,
  InputLabel,
  TextareaAutosize,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles, { style } from "./styles";

export default function TextInput(props) {
  const styles = useStyles();

  return (
    <Box className={styles.inputWrapper}>
      <InputLabel htmlFor={props.id} style={style.label}>
        {props.label}
      </InputLabel>
      <Box className={styles.boxInput}>
        <Input
          inputProps={{
            className: styles.input,
            // style: props.styleInput,
          }}
          id={props.id}
          {...props}
          // endAdornment={<SearchIcon className={styles.icon}/>}
        />

        <SearchIcon 
        className={styles.icon}
         />
      </Box>
    </Box>
    // <div>
    //   {/* <InputLabel htmlFor={props.id}>{props.label}</InputLabel> */}
    //   <div style={{
    //     backgroundColor:'#CCC',
    //     display: 'flex',
    //     justifyContent:'space-between',
    //     alignItems:'center',
    //     padding: '0px 12px'
    //   }}>
    //     <Input
    //       inputProps={
    //         {
    //           //  className: styles.input,
    //           //  style: props.styleInput,
    //         }
    //       }
    //       id={props.id}
    //       {...props}
    //       />
    //       <span>asdasd</span>
    //   </div>
    // </div>
  );
}
