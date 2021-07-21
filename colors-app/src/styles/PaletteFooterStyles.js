import sizes from "./sizes";

export default {
  PaletteFooter: {
    padding: "1rem",
    backgroundColor: "#d7f1f3",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1rem"
  },
  button: {
    margin: "1rem .5rem",
    padding: "1rem 0.5rem",
    textDecoration: "none",
    [sizes.down("xs")]: {
      margin: "0.2rem",
      padding: "0.3rem"
    }
  }
};
