import type { StyleSheet } from "@react-pdf/renderer";

export interface TemplateStyles {
  page: ReturnType<typeof StyleSheet.create>["page"];
  header: ReturnType<typeof StyleSheet.create>["header"];
  name: ReturnType<typeof StyleSheet.create>["name"];
  title: ReturnType<typeof StyleSheet.create>["title"];
  contactInfo: ReturnType<typeof StyleSheet.create>["contactInfo"];
  contactItem: ReturnType<typeof StyleSheet.create>["contactItem"];
  contactIcon: ReturnType<typeof StyleSheet.create>["contactIcon"];
  section: ReturnType<typeof StyleSheet.create>["section"];
  sectionTitle: ReturnType<typeof StyleSheet.create>["sectionTitle"];
  summary: ReturnType<typeof StyleSheet.create>["summary"];
  skillsContainer: ReturnType<typeof StyleSheet.create>["skillsContainer"];
  skillItem: ReturnType<typeof StyleSheet.create>["skillItem"];
  skillItemBold: ReturnType<typeof StyleSheet.create>["skillItemBold"];
  skillSeparator: ReturnType<typeof StyleSheet.create>["skillSeparator"];
  itemContainer: ReturnType<typeof StyleSheet.create>["itemContainer"];
  itemHeader: ReturnType<typeof StyleSheet.create>["itemHeader"];
  itemTitle: ReturnType<typeof StyleSheet.create>["itemTitle"];
  itemSubtitle: ReturnType<typeof StyleSheet.create>["itemSubtitle"];
  itemDate: ReturnType<typeof StyleSheet.create>["itemDate"];
  itemDescription: ReturnType<typeof StyleSheet.create>["itemDescription"];
  bulletList: ReturnType<typeof StyleSheet.create>["bulletList"];
  bulletItem: ReturnType<typeof StyleSheet.create>["bulletItem"];
  bullet: ReturnType<typeof StyleSheet.create>["bullet"];
  languagesList: ReturnType<typeof StyleSheet.create>["languagesList"];
  languageItem: ReturnType<typeof StyleSheet.create>["languageItem"];
  languageName: ReturnType<typeof StyleSheet.create>["languageName"];
  languageLevelContainer: ReturnType<
    typeof StyleSheet.create
  >["languageLevelContainer"];
  languageLevel: ReturnType<typeof StyleSheet.create>["languageLevel"];
  separator?: ReturnType<typeof StyleSheet.create>["separator"];
}
