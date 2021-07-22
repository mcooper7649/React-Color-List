import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },
  icon: {
    color: "#e11d23",
    backgroundColor: "linen",
    '&:hover': {
      color: '#4f51b3',
    },

  },
  logo: {
    marginRight: "15px",
    height: "2em",
    padding: "0 13px",
    fontSize: "45px",
    backgroundColor: "linen",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "red",
      outline: "none",
      border: "2px solid red",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    [sizes.down("sm")]: {
      width: "150px"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    backgroundColor: "powder"
  }
};
