import i18n from "@/i18n";
import { delay, generatePdfBlob } from "@/utils";
import type { ResumeData } from "@/interfaces";
import { useUI } from "./useUI.hooks";

export function useGeneratePdf() {
  const { setIsGeneratingPDF, isGeneratingPDF } = useUI();

  const generatePDF = async (data: ResumeData) => {
    setIsGeneratingPDF(true);
    try {
      await delay(5000);
      await i18n.changeLanguage(data.selectedCvLanguage);
      const blob = await generatePdfBlob(data);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.personalInfo.name}_${data.personalInfo.lastName}_CV.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error generating PDF..", err);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return {
    generatePDF,
    isGeneratingPDF,
  };
}
