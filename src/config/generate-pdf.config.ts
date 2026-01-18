import type { GeneratePdfConfig } from "@/interfaces";

export const GENERATE_PDF_CONFIG: GeneratePdfConfig = {
  fileName: "${name}_${lastName}_CV.pdf",
  fileType: "application/pdf",
  fileExtension: "pdf",
  fileContent: "application/pdf",
  delayAfterGeneration: 3000,
  debounceTimeWeb: 0,
  debounceTimeMobile: 300,
} as const;
