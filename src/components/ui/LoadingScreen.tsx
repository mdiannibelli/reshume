import { useUI } from "@/hooks";
import { useTranslation } from "react-i18next";

export function LoadingScreen() {
  const { isGeneratingPDF } = useUI();
  const { t } = useTranslation();
  if (!isGeneratingPDF) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-(--background-secondary)/80 backdrop-blur-sm">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-(--primary)/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-(--primary) rounded-full animate-spin"></div>
        </div>
        <p className="text-(--text-primary) text-lg font-medium">
          {t("GENERATE_RESUME.LOADING_SCREEN.GENERATING_PDF")}
        </p>
        <p className="text-(--text-secondary) text-sm mt-2">
          {t("GENERATE_RESUME.LOADING_SCREEN.PLEASE_WAIT")}
        </p>
      </div>
    </div>
  );
}
