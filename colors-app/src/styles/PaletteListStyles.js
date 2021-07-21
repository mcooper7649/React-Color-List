import sizes from "./sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "-webkit-fill-available",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#fff",
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
  },
  heading: {
    fontSize: "2rem",
    backgroundColor: "rgba(255,202,131,0.7)",
    padding: "20px",
    borderRadius: "10px 100px / 120px"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  div: {
    margin: "10px",
    display: "inline-grid"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#2e4357",
    "& a": {
      color: "#2e4357"
    },
    [sizes.down("xl")]: {
      width: "97%"
    },
    [sizes.down("l")]: {
      width: "97%"
    },
    [sizes.down("m")]: {
      width: "97%"
    },
    [sizes.down("xs")]: {
      width: "97%"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    }
  },
  button: {
    margin: "0 0.5rem",
    padding: "0.5rem",
    textDecoration: "none",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0 0.3rem"
    }
  },
};
  