import { pdf } from "@react-pdf/renderer";
import { HarvardDocument } from "@/components";
import type { ResumeData } from "@/interfaces";

export async function generatePdfBlob(data: ResumeData): Promise<Blob> {
  return await pdf(<HarvardDocument data={data} />).toBlob();
}
