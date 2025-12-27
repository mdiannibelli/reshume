import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { pdfStylesConfig } from "@/config/pdf-styles.config";
import type { ContactItem, ResumeData } from "@/interfaces";
import { translate } from "@/lib/translate";
import { formatDate, shortenUrl } from "@/utils";

interface HarvardDocumentProps {
  data: ResumeData;
}

export function HarvardDocument({ data }: HarvardDocumentProps) {
  const { personalInfo, education, experience, skills, wantIcons, language } =
    data;
  const {
    name,
    lastName,
    professionalTitle,
    email,
    phone,
    country,
    city,
    website,
    linkedin,
    github,
    behance,
    professionalSummary,
  } = personalInfo;

  const fullName = `${name} ${lastName}`;
  const location = `${city}, ${country}`;

  const t = (key: string) => {
    return translate(key, language);
  };

  const getDate = (dateString: string): string => {
    const months = [
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.JAN"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.FEB"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.MAR"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.APR"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.MAY"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.JUN"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.JUL"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.AUG"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.SEP"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.OCT"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.NOV"),
      t("GENERATE_RESUME.GENERATE_PDF.MONTHS.DEC"),
    ];
    return formatDate(dateString, months);
  };

  const formatDateRange = (
    startDate: string,
    endDate?: string,
    inProgress?: boolean
  ): string => {
    const start = getDate(startDate);
    if (inProgress) {
      return `${start} - ${t("GENERATE_RESUME.GENERATE_PDF.PRESENT")}`;
    }
    const end = endDate ? getDate(endDate) : "";
    return end ? `${start} - ${end}` : start;
  };

  // Build contact info array
  const contactItems: ContactItem[] = [];
  if (location)
    contactItems.push({
      type: "location",
      value: location,
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/map-pin.png",
    });
  if (email)
    contactItems.push({
      type: "email",
      value: email,
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/email.png",
    });
  if (phone)
    contactItems.push({
      type: "phone",
      value: phone,
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/phone.png",
    });
  if (website)
    contactItems.push({
      type: "website",
      value: shortenUrl(website),
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/globe.png",
    });
  if (linkedin)
    contactItems.push({
      type: "linkedin",
      value: shortenUrl(linkedin),
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/linkedin.png",
    });
  if (github)
    contactItems.push({
      type: "github",
      value: shortenUrl(github),
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/github.png",
    });
  if (behance)
    contactItems.push({
      type: "behance",
      value: shortenUrl(behance),
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/behance.png",
    });

  return (
    <Document>
      <Page size="A4" style={pdfStylesConfig.page}>
        {/* Header Section */}
        <View style={pdfStylesConfig.header}>
          <Text style={pdfStylesConfig.name}>{fullName}</Text>
          <Text style={pdfStylesConfig.title}>{professionalTitle}</Text>
        </View>

        {/* Contact Information */}
        {contactItems.length > 0 && (
          <View style={pdfStylesConfig.contactInfo}>
            {contactItems.map((item, index) => (
              <View key={index} style={pdfStylesConfig.contactItem}>
                {wantIcons && (
                  <Image
                    src={item.iconUrl}
                    style={pdfStylesConfig.contactIcon}
                  />
                )}
                <Text style={pdfStylesConfig.contactItem}>{item.value}</Text>
                {index < contactItems.length - 1 && (
                  <Text style={pdfStylesConfig.contactItem}> | </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Professional Summary */}
        {professionalSummary && (
          <View style={pdfStylesConfig.section}>
            <Text style={pdfStylesConfig.summary}>{professionalSummary}</Text>
          </View>
        )}

        {/* Professional Experience */}
        {experience && experience.length > 0 && (
          <View style={pdfStylesConfig.section}>
            <Text style={pdfStylesConfig.sectionTitle}>
              {t("GENERATE_RESUME.GENERATE_PDF.PROFESSIONAL_EXPERIENCE")}
            </Text>
            <View style={pdfStylesConfig.barSeparator}></View>
            {experience.map((exp) => (
              <View key={exp.id} style={pdfStylesConfig.itemContainer}>
                <View style={pdfStylesConfig.itemHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={pdfStylesConfig.itemTitle}>
                      {exp.position}
                    </Text>
                    <Text style={pdfStylesConfig.itemSubtitle}>
                      {exp.company}
                    </Text>
                  </View>
                  <Text style={pdfStylesConfig.itemDate}>
                    {formatDateRange(
                      exp.startDate,
                      exp.endDate,
                      exp.inProgress
                    )}
                  </Text>
                </View>
                {exp.description && (
                  <Text style={pdfStylesConfig.itemDescription}>
                    {exp.description}
                  </Text>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <View style={pdfStylesConfig.bulletList}>
                    {exp.achievements.map((achievement, idx) => (
                      <View
                        key={idx}
                        style={{ flexDirection: "row", marginBottom: 3 }}
                      >
                        <Text style={pdfStylesConfig.bullet}>•</Text>
                        <Text style={pdfStylesConfig.bulletItem}>
                          {achievement}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <View style={pdfStylesConfig.section}>
            <Text style={pdfStylesConfig.sectionTitle}>
              {t("GENERATE_RESUME.GENERATE_PDF.EDUCATION")}
            </Text>
            <View style={pdfStylesConfig.barSeparator}></View>
            {education.map((edu) => (
              <View key={edu.id} style={pdfStylesConfig.itemContainer}>
                <View style={pdfStylesConfig.itemHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={pdfStylesConfig.itemTitle}>{edu.title}</Text>
                    <Text style={pdfStylesConfig.itemSubtitle}>
                      {edu.institution}
                    </Text>
                  </View>
                  <Text style={pdfStylesConfig.itemDate}>
                    {formatDateRange(
                      edu.startDate,
                      edu.endDate,
                      edu.inProgress
                    )}
                  </Text>
                </View>
                {edu.description && (
                  <Text style={pdfStylesConfig.itemDescription}>
                    {edu.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Area of Expertise (Skills) */}
        {skills && skills.length > 0 && (
          <View style={pdfStylesConfig.section}>
            <Text style={pdfStylesConfig.sectionTitle}>
              {t("GENERATE_RESUME.GENERATE_PDF.SKILLS")}
            </Text>
            <View style={pdfStylesConfig.barSeparator}></View>
            <View style={pdfStylesConfig.skillsContainer}>
              {skills.map((skill, index) => (
                <View key={skill.id} style={{ flexDirection: "row" }}>
                  <Text style={pdfStylesConfig.skillItem}>{skill.name}</Text>
                  {index < skills.length - 1 && (
                    <Text style={pdfStylesConfig.skillSeparator}> | </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
}
