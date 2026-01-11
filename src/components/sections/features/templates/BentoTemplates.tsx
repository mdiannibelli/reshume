import { useTranslation } from "react-i18next";
import { TEMPLATES } from "@/constants";
import { TemplateFor } from "./TemplateFor";
import { TemplatePrice } from "./TemplatePrice";

export function BentoTemplates() {
  const { t } = useTranslation();
  const templates = TEMPLATES.map((template) => template.tag || "");
  const availableTemplates = {
    CLASSIC: templates[0],
    MODERN: templates[1],
    EXECUTIVE: templates[2],
    IMPACT: templates[3],
  };

  return (
    <div className="flex flex-col md:grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
      <div className="relative row-span-2">
        <div className="absolute inset-px rounded-lg bg-(--background-secondary) border-(--border) border lg:rounded-l-4xl"></div>
        <TemplatePrice templateName={availableTemplates.CLASSIC} />
        <div className="relative flex h-full flex-col">
          <div className="p-8 sm:px-10 sm:pt-10 sm:pb-0">
            <p className="mt-2 text-2xl font-medium tracking-tight text-(--text-primary)">
              {t("HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.CLASSIC.NAME")}
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary)">
              {t(
                "HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.CLASSIC.DESCRIPTION"
              )}
            </p>
            <TemplateFor templateName={availableTemplates.CLASSIC} />
          </div>
          <div className="@container hidden md:block relative min-h-120 w-full">
            <div className="absolute inset-x-10 right-3 top-24 bottom-[2px] overflow-hidden rounded-t-[6cqw] border-x-[1cqw] border-transparent border-t-[1cqw]">
              <img
                src="/imgs/templates/classic.webp"
                alt="Classic template image"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-lg:row-start-1 col-span-2">
        <div className="absolute inset-px rounded-lg bg-(--background-secondary) border-(--border) border max-lg:rounded-t-4xl"></div>
        <TemplatePrice templateName={availableTemplates.MODERN} />
        <div className="relative flex flex-col">
          <div className="p-8 sm:px-10 sm:pt-10 sm:pb-12">
            <p className="mt-2 text-2xl font-medium tracking-tight text-(--text-primary)">
              {t("HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.MODERN.NAME")}
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary)">
              {t(
                "HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.MODERN.DESCRIPTION"
              )}
            </p>
            <TemplateFor templateName={availableTemplates.MODERN} />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl"></div>
      </div>
      <div className="relative row-start-3 col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-(--primary)/25 border-(--primary) border"></div>
        <TemplatePrice templateName={availableTemplates.EXECUTIVE} />
        <div className="relative flex h-full flex-col">
          <div className="p-8 sm:px-10 sm:pt-10 sm:pb-0">
            <p className="mt-2 text-2xl font-medium tracking-tight text-(--text-primary)">
              {t(
                "HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.EXECUTIVE.NAME"
              )}
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary)">
              {t(
                "HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.EXECUTIVE.DESCRIPTION"
              )}
            </p>
            <TemplateFor templateName={availableTemplates.EXECUTIVE} />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15"></div>
      </div>
      <div className="relative row-span-1">
        <div className="absolute inset-px rounded-lg bg-(--primary)/25 border-(--primary) border max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
        <TemplatePrice templateName={availableTemplates.IMPACT} />
        <div className="relative flex h-full flex-col">
          <div className="p-8 sm:px-10 sm:pt-10 sm:pb-0">
            <p className="mt-2 text-2xl font-medium tracking-tight text-(--text-primary)">
              {t("HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.IMPACT.NAME")}
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary)">
              {t(
                "HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.IMPACT.DESCRIPTION"
              )}
            </p>
            <TemplateFor templateName={availableTemplates.IMPACT} />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
      </div>
    </div>
  );
}
