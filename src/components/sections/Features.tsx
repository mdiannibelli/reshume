import { SectionWrapper } from "@/layouts";
import { Trans, useTranslation } from "react-i18next";
import { TiArrowRight } from "react-icons/ti";
import { SlGraph } from "react-icons/sl";
import { SiContentstack } from "react-icons/si";

export function Features() {
  const { t } = useTranslation();
  return (
    <SectionWrapper resetStyles className="mt-36 lg:mt-52">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-6 xl:gap-x-16 px-6 xl:px-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 row-span-2 lg:row-span-1 col-span-1 lg:col-span-2">
            <a
              className="text-xs flex items-center gap-2 text-(--text-primary)"
              href="/product/investor-database/"
            >
              {t("HOME.FEATURES.ATS_OPTIMIZED.HEAD")}
              <TiArrowRight className="text-2xl text-(--text-primary)" />
            </a>
            <h2 className="text-4xl font-medium text-(--text-primary)">
              {t("HOME.FEATURES.ATS_OPTIMIZED.TITLE")}
            </h2>
            <p className="text-(--text-secondary) mt-2">
              <Trans
                i18nKey="HOME.FEATURES.ATS_OPTIMIZED.DESCRIPTION"
                components={{
                  bold: <strong className="text-(--text-primary)" />,
                }}
              />
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full row-span-2 col-span-1 lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 z-20 pointer-events-none fade-image-gradient-right"></div>
              <div className="absolute inset-0 z-20 pointer-events-none fade-image-gradient-bottom"></div>
              <img
                className="w-full object-cover rounded-2xl border-(--primary-darker) border-2"
                alt="Showcase resume made with Reshume"
                src="/imgs/home/features/ats-optimized/showcase-reshume.webp"
              ></img>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 overflow-hidden col-span-1 -translate-y-10">
            <div className="p-4 bg-(--primary-hover)/10 rounded-full w-fit">
              <div className="p-3 bg-(--primary-hover)/25 rounded-full">
                <SlGraph className="text-4xl text-(--primary)" />
              </div>
            </div>
            <span className="text-2xl font-medium text-(--text-primary)">
              {t("HOME.FEATURES.ATS_OPTIMIZED.CHARACTERISTICS.1.TITLE")}
            </span>
            <p className="max-w-lg text-(--text-secondary)">
              {t("HOME.FEATURES.ATS_OPTIMIZED.CHARACTERISTICS.1.DESCRIPTION")}
            </p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 overflow-hidden col-span-1 -translate-y-10">
            <div className="p-4 bg-(--primary-hover)/10 rounded-full w-fit">
              <div className="p-3 bg-(--primary-hover)/25 rounded-full">
                <SiContentstack className="text-4xl text-(--primary)" />
              </div>
            </div>
            <span className="text-2xl font-medium text-(--text-primary)">
              {t("HOME.FEATURES.ATS_OPTIMIZED.CHARACTERISTICS.2.TITLE")}
            </span>
            <p className="max-w-lg text-(--text-secondary)">
              {t("HOME.FEATURES.ATS_OPTIMIZED.CHARACTERISTICS.2.DESCRIPTION")}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
