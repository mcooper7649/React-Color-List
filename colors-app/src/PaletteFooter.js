import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";

// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";


function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
    {/* <Link to='/palette/new'
          className={classes.button}>
    <Button variant='contained'
            color='primary'>
              Custom Palette
    </Button>
    </Link> */}
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
export default withStyles(styles)(PaletteFooter);
