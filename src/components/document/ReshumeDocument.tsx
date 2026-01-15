import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import type { ContactItem, ResumeData } from "@/interfaces";
import { translate } from "@/lib";
import { formatDate, shortenUrl } from "@/utils";

interface ReshumeDocumentProps {
  data: ResumeData;
}

export function ReshumeDocument({ data }: ReshumeDocumentProps) {
  const {
    personalInfo,
    education,
    experience,
    skills,
    wantIcons,
    template,
    selectedCvLanguage,
    languages,
  } = data;
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
    return translate(key, selectedCvLanguage);
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

  const {
    page,
    header,
    name: nameStyle,
    title,
    contactInfo,
    contactItem,
    contactIcon,
    summary,
    section,
    sectionTitle,
    itemContainer,
    itemHeader,
    itemTitle,
    itemSubtitle,
    itemDate,
    itemDescription,
    bulletList,
    bullet,
    skillSeparator,
    skillItem,
    skillsContainer,
    languagesList,
    languageItem,
    languageName,
    languageLevelContainer,
    languageLevel,
    separator,
  } = template.styles;

  return (
    <Document>
      <Page size="A4" style={page}>
        {/* Header Section */}
        <View style={header}>
          <Text style={nameStyle}>{fullName}</Text>
          <Text style={title}>{professionalTitle}</Text>
        </View>

        {/* Contact Information */}
        {contactItems.length > 0 && (
          <View style={contactInfo}>
            {contactItems.map((item, index) => (
              <View key={index} style={contactItem}>
                {wantIcons && <Image src={item.iconUrl} style={contactIcon} />}
                <Text style={contactItem}>{item.value}</Text>
                {index < contactItems.length - 1 && (
                  <Text style={contactItem}> | </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Professional Summary */}
        {professionalSummary && (
          <View style={section}>
            <Text style={summary}>{professionalSummary}</Text>
          </View>
        )}

        {/* Professional Experience */}
        {experience && experience.length > 0 && (
          <View style={section}>
            <Text style={sectionTitle}>
              {t("GENERATE_RESUME.GENERATE_PDF.PROFESSIONAL_EXPERIENCE")}
            </Text>
            <View style={separator} />
            {experience.map((exp) => (
              <View key={exp.id} style={itemContainer}>
                <View style={itemHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={itemTitle}>{exp.position}</Text>
                    <Text style={itemSubtitle}>{exp.company}</Text>
                  </View>
                  <Text style={itemDate}>
                    {formatDateRange(
                      exp.startDate,
                      exp.endDate,
                      exp.inProgress
                    )}
                  </Text>
                </View>
                {exp.description && (
                  <Text style={itemDescription}>{exp.description}</Text>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <View style={bulletList}>
                    {exp.achievements.map((achievement, idx) => (
                      <View
                        key={idx}
                        style={{ flexDirection: "row", marginBottom: 3 }}
                      >
                        <Text style={bullet}>•</Text>
                        <Text style={itemDescription}>{achievement}</Text>
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
          <View style={section}>
            <Text style={sectionTitle}>
              {t("GENERATE_RESUME.GENERATE_PDF.EDUCATION")}
            </Text>
            <View style={separator} />
            {education.map((edu) => (
              <View key={edu.id} style={itemContainer}>
                <View style={itemHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={itemTitle}>{edu.title}</Text>
                    <Text style={itemSubtitle}>{edu.institution}</Text>
                  </View>
                  <Text style={itemDate}>
                    {formatDateRange(
                      edu.startDate,
                      edu.endDate,
                      edu.inProgress
                    )}
                  </Text>
                </View>
                {edu.description && (
                  <Text style={itemDescription}>{edu.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <View style={section}>
            <Text style={sectionTitle}>
              {t("GENERATE_RESUME.GENERATE_PDF.SKILLS")}
            </Text>
            <View style={separator} />
            <View style={skillsContainer}>
              {skills.map((skill) => (
                <View key={skill.id} style={{ flexDirection: "row" }}>
                  <Text style={skillSeparator}> • </Text>
                  <Text style={skillItem}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <View style={section}>
            <Text style={sectionTitle}>
              {t("GENERATE_RESUME.GENERATE_PDF.LANGUAGES.TITLE")}
            </Text>
            <View style={separator} />
            <View style={languagesList}>
              {languages.map((language, index) => (
                <View key={index} style={languageItem}>
                  <Text style={languageName}>{language.name}:</Text>
                  <View style={languageLevelContainer}>
                    <Text style={bullet}>•</Text>
                    <Text style={languageLevel}>
                      {t(
                        `GENERATE_RESUME.GENERATE_PDF.LANGUAGES.LEVELS.${language.level.toUpperCase()}`
                      )}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
}
