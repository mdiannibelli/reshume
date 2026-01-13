import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

export function ContributeLayout() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4">
      <div className="col-span-2 md:col-span-6 relative inline-block rounded-lg bg-(--primary) backdrop-blur-md border-(--primary-dark) border overflow-hidden group mb-6 rounded-t-4xl">
        <div className="absolute inset-0 bg-(--primary-darker)/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative flex flex-col h-full p-12">
          <div>
            <h2 className="text-4xl font-medium mb-4 text-(--text-primary)">
              {t("HOME.CONTRIBUTE.LAYOUT.TITLE")}
            </h2>
            <p className="text-xl text-(--text-secondary) max-w-3xl">
              {t("HOME.CONTRIBUTE.LAYOUT.DESCRIPTION")}
            </p>
          </div>
          <a
            href="https://github.com/mdiannibelli/reshume"
            target="_blank"
            className="flex justify-center items-center gap-3 mt-16 bg-(--background-secondary) hover:text-(--text-secondary) transition-colors duration-300 rounded-xl px-8 py-2 w-fit mx-auto"
          >
            <span className="text-(--text-primary) font-medium text-xl">
              {t("HOME.CONTRIBUTE.MAIN_BUTTON")}
            </span>
            <FaExternalLinkAlt className="text-(--text-primary) text-lg" />
          </a>
        </div>
        <div className="absolute -right-8 bottom-0 top-16">
          <FaGithub className="text-(--text-primary) text-[20rem] opacity-10" />
        </div>
      </div>
      <div className="col-span-2 row-start-2 md:col-span-3 lg:col-span-4 md:row-start-2 relative inline-block bg-(--background-secondary) backdrop-blur-md border-(--border-light) border overflow-hidden group mb-6 rounded-4xl">
        <div className="absolute inset-0 bg-(--background)/75 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative flex flex-col h-full px-8 py-12 items-center">
          <div className="flex flex-col flex-1">
            <h2 className="text-3xl font-medium mb-4 text-(--text-primary)">
              {t("HOME.CONTRIBUTE.CONTRIBUTIONS.TITLE")}
            </h2>
            <p className="text-lg max-w-2xl text-(--text-secondary) py-2">
              <Trans
                i18nKey="HOME.CONTRIBUTE.CONTRIBUTIONS.DESCRIPTION"
                components={{
                  bold: <span className="text-(--success)" />,
                }}
              />
            </p>
          </div>
          <div>
            <a
              href="https://github.com/mdiannibelli/reshume/issues/new"
              target="_blank"
              className="flex justify-center items-center gap-3 transition-colors duration-300 rounded-lg px-4 py-2 w-fit mx-auto"
            >
              <span className="text-(--success) font-medium text-lg">
                {t("HOME.CONTRIBUTE.CONTRIBUTIONS.BUTTON")}
              </span>
              <FaExternalLinkAlt className="text-(--success) text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-start-3 md:col-span-3 lg:col-span-2 md:row-start-2 relative inline-block bg-(--success) backdrop-blur-md border-(--border-light) border overflow-hidden group mb-6 rounded-4xl">
        <div className="absolute inset-0 bg-(--background)/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative flex flex-col h-full p-8 py-12 items-center">
          <div className="flex flex-col flex-1">
            <h2 className="text-3xl font-medium mb-4 text-(--text-primary)">
              {t("HOME.CONTRIBUTE.RATING.TITLE")}
            </h2>
            <p className="text-lg max-w-2xl text-(--text-primary) py-2">
              <Trans
                i18nKey="HOME.CONTRIBUTE.RATING.DESCRIPTION"
                components={{
                  bold: <span className="font-bold" />,
                }}
              />
            </p>
          </div>
          <div>
            <a
              href="https://github.com/mdiannibelli/reshume"
              target="_blank"
              className="flex justify-center items-center gap-3 transition-colors duration-300 rounded-lg px-4 py-2 w-fit mx-auto"
            >
              <span className="text-(--yellow) font-medium text-lg">
                {t("HOME.CONTRIBUTE.RATING.BUTTON")}
              </span>
              <FaStar className="text-(--yellow) text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
