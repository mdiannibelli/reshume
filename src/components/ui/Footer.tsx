import { FaGithub, FaInstagram } from "react-icons/fa6";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative w-full mt-auto">
      <div className="container mx-auto px-3 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <div className="flex items-center">
              <Link to="/" className="hidden lg:block">
                {/* // TODO Insert logo */}
                Reshume
              </Link>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-(--text-secondary)">
                {t("FOOTER.TITLE")}
              </span>
            </div>
            <p className="mt-4 text-(--text-secondary) max-w-xs">
              {t("FOOTER.DESCRIPTION")}
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/reshume/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Reshume on Instagram"
                className="w-10 h-10 rounded-full bg-(--text-primary)/5 backdrop-blur-sm flex items-center justify-center hover:bg-(--text-primary)/10 transition-colors duration-500 border border-(--border-light)"
              >
                <FaInstagram className="text-(--text-primary)" />
              </a>
              <a
                href="https://github.com/mdiannibelli/reshume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Reshume on Github"
                className="w-10 h-10 rounded-full bg-(--text-primary)/5 backdrop-blur-sm flex items-center justify-center hover:bg-(--text-primary)/10 transition-colors duration-500 border border-(--border-light)"
              >
                <FaGithub className="text-(--text-primary)" />
              </a>
            </div>
          </div>
          {/* Features */}
          <div className="col-span-1 lg:col-span-1">
            <div className="relative z-10">
              <h3 className="font-semibold mb-3 text-transparent bg-clip-text bg-linear-to-r from-white to-(--text-secondary)">
                {t("FOOTER.LINKS.NAVBAR.FEATURES.TITLE")}
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    href={t("FOOTER.LINKS.NAVBAR.FEATURES.LINK")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.FEATURES.LIST.1")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="col-span-1 lg:col-span-1">
            <div className="relative z-10">
              <h3 className="font-semibold mb-3 text-transparent bg-clip-text bg-linear-to-r from-white to-(--text-secondary)">
                {t("FOOTER.LINKS.NAVBAR.PRICING.TITLE")}
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    href={t("FOOTER.LINKS.NAVBAR.PRICING.LINK")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.PRICING.LIST.1")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contribute */}
          <div className="col-span-1 lg:col-span-1">
            <div className="relative z-10">
              <h3 className="font-semibold mb-3 text-transparent bg-clip-text bg-linear-to-r from-white to-(--text-secondary)">
                {t("FOOTER.LINKS.NAVBAR.CONTRIBUTE.TITLE")}
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    href={t("FOOTER.LINKS.NAVBAR.CONTRIBUTE.LINK")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.CONTRIBUTE.LIST.1")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="col-span-1 lg:col-span-1">
            <div className="relative z-10">
              <h3 className="font-semibold mb-3 text-transparent bg-clip-text bg-linear-to-r from-white to-(--text-secondary)">
                {t("FOOTER.LINKS.NAVBAR.FAQ.TITLE")}
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    href={t("FOOTER.LINKS.NAVBAR.FAQ.LINK")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.FAQ.LIST.1")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className="w-[80%] md:max-w-2xl xl:max-w-7xl mx-auto bg-(--text-primary) opacity-10 h-px mt-8"></div>
      <footer className="p-8">
        <p className="text-base text-center text-(--text-primary)">
          © {currentYear}{" "}
          <Trans
            i18nKey="FOOTER.COPYRIGHT"
            components={{
              a: (
                <a
                  href="https://github.com/mdiannibelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--text-primary) hover:underline"
                />
              ),
            }}
          />
        </p>
      </footer>
    </div>
  );
}
