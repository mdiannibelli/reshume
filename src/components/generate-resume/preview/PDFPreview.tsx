import { BlobProvider } from "@react-pdf/renderer";
import { ReshumeDocument } from "@/components/document";
import { ErrorBoundary } from "@/components/shared";
import type { PDFPreviewProps } from "@/interfaces";
import { hasValidTemplateStyles } from "@/helpers";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";



export function PDFPreview({ data, className = "" }: PDFPreviewProps) {
  const { t } = useTranslation();

  const isValidData = useMemo(() => hasValidTemplateStyles(data), [data]);

  const placeholderContent = (
    <div className="w-full h-full flex flex-col items-center justify-center bg-(--bg-secondary) rounded-lg min-h-[600px]">
      <p className="text-(--text-secondary) text-sm text-center px-4">
        {t("GENERATE_RESUME.FORM_STEPS.PREVIEW_PLACEHOLDER")}
      </p>
    </div>
  );

  const errorContent = (
    <div className="w-full h-full flex flex-col items-center justify-center bg-(--bg-secondary) rounded-lg min-h-[600px]">
      <p className="text-(--text-secondary) text-sm text-center px-4">
        {t("GENERATE_RESUME.FORM_STEPS.PREVIEW_ERROR")}
      </p>
    </div>
  );

  if (!isValidData) {
    return (
      <div className={`w-full h-full ${className}`}>
        {placeholderContent}
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <ErrorBoundary fallback={errorContent}>
        <BlobProvider document={<ReshumeDocument data={data} />}>
          {({ url, loading, error }) => {
            if (loading) {
              return (
                <div className="w-full h-full flex flex-col items-center justify-center bg-(--bg-secondary) rounded-lg min-h-[600px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-(--primary) border-t-transparent mb-4" />
                  <p className="text-(--text-secondary) text-sm">
                    {t("GENERATE_RESUME.LOADING_SCREEN.GENERATING_PDF")}
                  </p>
                </div>
              );
            }

            if (error) {
              return errorContent;
            }

            if (url) {
              // Add PDF viewer parameters to hide controls and toolbars
              const pdfUrl = `${url}#toolbar=0&navpanes=0&scrollbar=0`;
              
              return (
                <iframe
                  src={pdfUrl}
                  title="PDF Preview"
                  className="w-full h-full rounded-lg"
                  style={{ minHeight: "600px", border: "none" }}
                />
              );
            }

            return null;
          }}
        </BlobProvider>
      </ErrorBoundary>
    </div>
  );
}
