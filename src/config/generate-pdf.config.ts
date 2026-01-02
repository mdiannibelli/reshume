import { pdfStylesConfig } from "@/constants";

export const GENERATE_PDF_CONFIG = {
  fileName: "${name}_${lastName}_CV.pdf",
  fileType: "application/pdf",
  fileExtension: "pdf",
  fileContent: "application/pdf",
  delayAfterGeneration: 3000,
  pdfStyles: pdfStylesConfig,
} as const;
