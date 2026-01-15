import i18n from "@/i18n";
import { delay, generatePdfBlob } from "@/utils";
import type { ResumeData } from "@/interfaces";
import { useUI } from "./useUI.hooks";
import { useState } from "react";
import { GENERATE_PDF_CONFIG } from "@/config";

export function useGeneratePdf() {
  const { setIsGeneratingPDF, isGeneratingPDF } = useUI();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const resetPdf = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }
    setPdfUrl(null);
    setFileName(null);
  };

  const generatePDF = async (data: ResumeData): Promise<boolean> => {
    setIsGeneratingPDF(true);
    resetPdf();

    const fileName = GENERATE_PDF_CONFIG.fileName
      .replace("${name}", data.personalInfo.name)
      .replace("${lastName}", data.personalInfo.lastName);

    try {
      await delay(GENERATE_PDF_CONFIG.delayAfterGeneration);
      await i18n.changeLanguage(data.selectedCvLanguage);
      const blob = await generatePdfBlob(data);
      const url = URL.createObjectURL(blob);

      setPdfUrl(url);
      setFileName(fileName);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();

      return true;
    } catch (err) {
      console.error("Error generating PDF..", err);
      resetPdf();
      return false;
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return {
    generatePDF,
    isGeneratingPDF,
    pdfUrl,
    fileName,
  };
}
