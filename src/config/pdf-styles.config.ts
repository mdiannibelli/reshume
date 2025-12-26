import { StyleSheet } from "@react-pdf/renderer";

export const pdfStylesConfig = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheader: {
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
});
