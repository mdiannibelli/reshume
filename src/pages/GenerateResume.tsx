import { SectionWrapper } from "@/layouts";
import { ResumeGenerator } from "@/components";
import { PDFPreview } from "@/components/generate-resume/preview";
import { useDebouncedValue, useFormStore } from "@/hooks";
import { GENERATE_PDF_CONFIG } from "@/config";

export function GenerateResume() {
  const { formData } = useFormStore();
  const debouncedFormData = useDebouncedValue(
    formData,
    GENERATE_PDF_CONFIG.debounceTimeWeb,
  );
  return (
    <SectionWrapper resetStyles noPadding className="py-32">
      <div className="w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full px-6">
            <ResumeGenerator />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="h-[calc(100vh-200px)]">
                <PDFPreview data={debouncedFormData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
