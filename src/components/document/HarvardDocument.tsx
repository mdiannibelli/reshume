import { Document, Page, Text, View } from "@react-pdf/renderer";
import { pdfStylesConfig } from "@/config/pdf-styles.config";
import type { ResumeData } from "@/interfaces";

export function HarvardDocument({ data }: { data: ResumeData }) {
  const { personalInfo, education, experience, skills } = data;
  const { name, lastName, professionalTitle } = personalInfo;
  const fullName = `${name} ${lastName}`;
  return (
    <Document>
      <Page size="A4" style={pdfStylesConfig.page}>
        <View style={pdfStylesConfig.section}>
          <Text style={pdfStylesConfig.header}>{fullName}</Text>
          <Text style={pdfStylesConfig.header}>{professionalTitle}</Text>
        </View>
      </Page>
    </Document>
  );
}
