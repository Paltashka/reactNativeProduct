import { StyleSheet } from "react-native";

export const styleAllProducts = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#d4ebf2",
    paddingTop: 30,
    paddingBottom: 10,

    gap: 10,
  },
  separator: {
    height: 20,
  },
  buttons: {
    display: "flex",
    width: "100%",
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  empty: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
  },
  text: {
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    color: "red",
    height: "auto",
  },
});
