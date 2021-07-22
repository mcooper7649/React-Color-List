import sizes from "./sizes";

export default {
  PaletteFooter: {
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    position: "fixed",
    background: "fixed"
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1rem"
  },
  button: {
    margin: "0.7rem .7rem",
    padding: "0.2rem 0.2rem",
    textDecoration: "none",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0 0.3rem",
      fontSize: "0.1rem"
    }
  }
};
