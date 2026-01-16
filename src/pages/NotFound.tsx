import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--background) text-(--text-primary)">
      <div className="text-center">
        <span className="tracking-tighter text-[8rem] md:text-[15rem] font-bold text-(--primary)">
          404
        </span>
        <h2 className="text-5xl font-semibold mb-8">{t("NOT_FOUND.TITLE")}</h2>
        <p className="text-(--text-secondary) mb-12">
          {t("NOT_FOUND.DESCRIPTION")}
        </p>
        <Link
          to="/"
          className="px-6 py-3 border-(--primary) border duration-300 hover:bg-(--primary)/5 text-(--text-primary) hover:text-(--primary) rounded-lg transition-all font-medium"
        >
          {t("NOT_FOUND.BACK_HOME")}
        </Link>
      </div>
    </div>
  );
}
