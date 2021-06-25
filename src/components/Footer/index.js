import React from "react";
import useStyles from "./styles";
import { Box, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Dimensions from "react-dimensions";

const customStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

function PageView({ quantityPage, setIndexPage, indexPage, containerWidth }) {
  const styles = useStyles();
  const classes = customStyles();
  return (
    <Box
      className={styles.boxContainer}
      style={{ margin: containerWidth <= 500 ? 10 : 40 }}
    >
      <div className={classes.root}>
        <Pagination
          count={quantityPage.length}
          variant="outlined"
          shape="rounded"
          color="primary"
          showFirstButton
          showLastButton
          className={styles.pagination}
          onChange={({ target, currentTarget }) => {
            if (!!!target.textContent) {
              if (currentTarget.ariaLabel.toLowerCase().includes("next")) {
                setIndexPage(indexPage + 1);
              } else if (
                currentTarget.ariaLabel.toLowerCase().includes("previous")
              ) {
                setIndexPage(indexPage - 1);
              } else if (
                currentTarget.ariaLabel.toLowerCase().includes("last")
              ) {
                setIndexPage(quantityPage.length - 1);
              } else {
                setIndexPage(0);
              }
            } else {
              setIndexPage(parseInt(target.textContent) - 1);
            }
          }}
        />
      </div>
    </Box>
  );
}

export default Dimensions()(PageView);
