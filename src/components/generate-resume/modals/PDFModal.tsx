// TODO Preview modal will be implemented late, in another feature, because actually it doesn't work as expected
/* import { BlobProvider } from "@react-pdf/renderer";
import { ReshumeDocument } from "@/components/document";
import { useUI } from "@/hooks";
import type { ResumeData } from "@/interfaces";
import { useTranslation } from "react-i18next";

interface PDFModalProps {
  formData: ResumeData;
  onClose: () => void;
}

export function PDFModal({ formData, onClose }: PDFModalProps) {
  const { setIsPDFModalOpen, isPDFModalOpen } = useUI();
  const { t } = useTranslation();

  if (!isPDFModalOpen) return null;

  const handleClose = () => {
    setIsPDFModalOpen(false);
    onClose();
  };

  return (
    <div className="fixed w-full h-full inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <BlobProvider document={<ReshumeDocument data={formData} />}>
        {({ blob, url, loading, error }) => {
          return (
            <div className="relative w-full h-full flex flex-col">
              <button
                onClick={handleClose}
                className="cursor-pointer absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors shadow-lg"
                aria-label="Cerrar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex-1 flex items-center justify-center p-8">
                {loading ? (
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 border-4 border-red-500/30 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-transparent border-t-red-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-white text-lg font-medium">
                      {t("GENERATE_RESUME.LOADING_SCREEN.GENERATING_PDF") ||
                        "Generando PDF..."}
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                      {t("GENERATE_RESUME.LOADING_SCREEN.PLEASE_WAIT") ||
                        "Por favor espera..."}
                    </p>
                  </div>
                ) : error ? (
                  <div className="text-center text-white">
                    <p className="text-lg font-medium mb-2">
                      Error al generar el PDF
                    </p>
                    <p className="text-sm text-white/60">{error.toString()}</p>
                  </div>
                ) : url ? (
                  <div className="w-full max-w-4xl h-full bg-white rounded-lg shadow-2xl overflow-hidden">
                    <iframe
                      src={url}
                      className="w-full h-full border-0"
                      title="Vista previa del CV"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </BlobProvider>
    </div>
  );
}
 */
