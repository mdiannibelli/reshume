import { generatePdfBlob } from "@/utils";
import type { ResumeData } from "@/interfaces";
import { useState } from "react";
import i18n from "@/i18n";

export function useGeneratePdf() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async (data: ResumeData) => {
    setIsGenerating(true);
    try {
      await i18n.changeLanguage(data.language);
      const blob = await generatePdfBlob(data);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.personalInfo.name.toLowerCase()}-${data.personalInfo.lastName.toLowerCase()}-resume.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error generating PDF..", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generatePDF,
    isGenerating,
  };
}
