import i18n from "@/i18n";

// Use i18n directly instead of useTranslation hook (hooks don't work in react-pdf)
// Ensure translations are loaded before using them
export const translate = (key: string, locale: string): string => {
  try {
    return i18n.t(key, { lng: locale }) || key;
  } catch (error) {
    console.error("Translation error:", error);
    return key;
  }
};
