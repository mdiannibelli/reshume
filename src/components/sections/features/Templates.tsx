import { Trans, useTranslation } from "react-i18next";
import { TiArrowRight } from "react-icons/ti";
import { BentoTemplates } from "./templates/BentoTemplates";

export function Templates() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 xl:gap-x-16 px-6 xl:px-0">
      {/* Column 1 */}
      <div className="flex flex-col gap-4 row-span-2 lg:row-span-1 col-span-2">
        <a
          className="text-xs flex items-center gap-2 text-(--text-primary)"
          href="/product/investor-database/"
        >
          {t("HOME.FEATURES.PROFESSIONAL_TEMPLATES.HEAD")}
          <TiArrowRight className="text-2xl text-(--text-primary)" />
        </a>
        <h2 className="text-4xl font-medium text-(--text-primary)">
          {t("HOME.FEATURES.PROFESSIONAL_TEMPLATES.TITLE")}
        </h2>
        <p className="text-(--text-secondary) mt-2">
          <Trans
            i18nKey="HOME.FEATURES.PROFESSIONAL_TEMPLATES.DESCRIPTION"
            components={{
              bold: <strong className="text-(--text-primary)" />,
            }}
          />
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex col-span-4">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl bg-clip-text text-transparent bg-linear-to-r from-white to-(--text-secondary)">
            {t("HOME.FEATURES.PROFESSIONAL_TEMPLATES.SUBTITLE")}
          </h2>
          <BentoTemplates />
        </div>
      </div>
    </div>
  );
}
