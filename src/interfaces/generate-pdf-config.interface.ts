export interface GeneratePdfConfig {
  fileName: string;
  fileType: string;
  fileExtension: string;
  fileContent: string;
  delayAfterGeneration: number;
  debounceTimeWeb: number;
  debounceTimeMobile: number;
}
