import { StyleSheet } from "@react-pdf/renderer";
import type { TemplateStyles } from "@/interfaces";

export const Modern: TemplateStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#000000",
  },
  header: {
    marginBottom: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#333333",
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 9,
    color: "#333333",
  },
  contactItem: {
    lineHeight: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  contactIcon: {
    width: 8,
    height: 8,
    transform: "translateY(-2px)",
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 12,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 0.5,
    color: "#000000",
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "justify",
    marginBottom: 10,
    color: "#333333",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    gap: 5,
  },
  skillItem: {
    marginRight: 3,
    fontSize: 10,
    color: "#333333",
  },
  skillItemBold: {
    fontWeight: "bold",
    marginRight: 6,
    fontSize: 10,
    color: "#333333",
  },
  skillSeparator: {
    color: "#666666",
  },
  itemContainer: {
    margin: 12,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
  },
  itemSubtitle: {
    fontSize: 10,
    color: "#666666",
    marginTop: 2,
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 9,
    color: "#666666",
    fontStyle: "italic",
  },
  itemDescription: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#333333",
    marginTop: 4,
    marginLeft: 0,
  },
  bulletList: {
    marginTop: 4,
    marginLeft: 12,
  },
  bulletItem: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#333333",
    marginBottom: 3,
  },
  bullet: {
    marginRight: 6,
    fontSize: 10,
    color: "#000000",
  },
  languagesList: {
    flexDirection: "column",
    marginBottom: 12,
    gap: 8,
  },
  languageItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  languageName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    marginRight: 4,
  },
  languageLevelContainer: {
    flexDirection: "row",
    marginLeft: 16,
    marginTop: 4,
  },
  languageLevel: {
    fontSize: 10,
    color: "#333333",
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#333333",
    marginBottom: 18,
  },
}) as TemplateStyles;
