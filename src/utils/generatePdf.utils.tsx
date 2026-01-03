import { pdf } from "@react-pdf/renderer";
import { ReshumeDocument } from "@/components";
import type { ResumeData } from "@/interfaces";

export async function generatePdfBlob(data: ResumeData): Promise<Blob> {
  return await pdf(<ReshumeDocument data={data} />).toBlob();
}
