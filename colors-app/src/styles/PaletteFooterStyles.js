import sizes from "./sizes";

export default {
  PaletteFooter: {
    backgroundColor: "#d7f1f3",
    padding: "1%",
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
    margin: "0 .5rem",
    padding: "0 0.5rem",
    textDecoration: "none",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0 0.3rem"
    }
  }
};
