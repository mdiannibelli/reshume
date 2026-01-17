import { Trans, useTranslation } from "react-i18next";
import { TiArrowRight } from "react-icons/ti";
import { IoCheckmarkSharp } from "react-icons/io5";
import demoGif from "@/assets/videos/demo.gif";

export function InstantGeneration() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 xl:gap-x-16 px-6 xl:px-0">
      {/* Column 1 */}
      <div className="flex flex-col gap-4 row-span-2 lg:row-span-1 col-span-2">
        <a
          className="text-xs flex items-center gap-2 text-(--text-primary)"
          href="/product/investor-database/"
        >
          {t("HOME.FEATURES.INSTANT_RESUME_GENERATION.HEAD")}
          <TiArrowRight className="text-2xl text-(--text-primary)" />
        </a>
        <h2 className="text-4xl font-medium text-(--text-primary)">
          {t("HOME.FEATURES.INSTANT_RESUME_GENERATION.TITLE")}
        </h2>
        <p className="text-(--text-secondary) mt-2">
          <Trans
            i18nKey="HOME.FEATURES.INSTANT_RESUME_GENERATION.DESCRIPTION"
            components={{
              bold: <strong className="text-(--text-primary)" />,
            }}
          />
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex w-full row-span-2 col-span-4 max-h-128">
        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-cover rounded-2xl border-(--border) border-2"
            src={demoGif}
            loading="lazy"
            alt="Resume generation demo"
          />
        </div>
      </div>

      {/* Column 3 */}
      <div className="col-span-4">
        <div className="flex flex-wrap lg:justify-around gap-8 xl:gap-0">
          <div className="flex items-center xl:gap-4 gap-2">
            <div className="p-4 bg-(--primary-hover)/10 rounded-full w-fit">
              <div className="p-2 bg-(--primary-hover)/25 rounded-full">
                <IoCheckmarkSharp className="text-2xl lg:text-xl xl:text-2xl text-(--primary)" />
              </div>
            </div>
            <span className="text-lg md:text-2xl lg:text-md xl:text-xl font-medium text-(--text-primary)">
              {t("HOME.FEATURES.INSTANT_RESUME_GENERATION.CHECKLIST.1")}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-(--primary-hover)/10 rounded-full w-fit">
              <div className="p-2 bg-(--primary-hover)/25 rounded-full">
                <IoCheckmarkSharp className="text-2xl lg:text-xl xl:text-2xl text-(--primary)" />
              </div>
            </div>
            <span className="text-lg md:text-2xl lg:text-md xl:text-xl font-medium text-(--text-primary)">
              {t("HOME.FEATURES.INSTANT_RESUME_GENERATION.CHECKLIST.2")}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-(--primary-hover)/10 rounded-full w-fit">
              <div className="p-2 bg-(--primary-hover)/25 rounded-full">
                <IoCheckmarkSharp className="text-2xl lg:text-xl xl:text-2xl text-(--primary)" />
              </div>
            </div>
            <span className="text-lg md:text-2xl lg:text-md xl:text-xl font-medium text-(--text-primary)">
              {t("HOME.FEATURES.INSTANT_RESUME_GENERATION.CHECKLIST.3")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
