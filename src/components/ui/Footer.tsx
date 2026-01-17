import { FaGithub, FaHeart, FaInstagram } from "react-icons/fa6";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useNavHandling } from "@/hooks";

export function Footer() {
  const { t } = useTranslation();
  const { handleToTop, handleHashNavigation } = useNavHandling();
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative w-full mt-auto container mx-auto px-3 md:px-6 lg:px-8">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <div className="flex items-center">
              <Link
                to="/"
                onClick={() => handleToTop("/")}
                className="hidden lg:flex items-center gap-x-2"
              >
                <div className="rounded-xl h-10 w-10 border-(--background) border-2">
                  <img
                    src="/reshume.svg"
                    alt="Reshume"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-(--text-secondary)">
                  {t("FOOTER.TITLE")}
                </span>
              </Link>
            </div>
            <p className="mt-4 text-(--text-secondary) max-w-xs">
              {t("FOOTER.DESCRIPTION")}
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/reshumeapp/"
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
                  <Link
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    to={t("FOOTER.LINKS.NAVBAR.FEATURES.LINK")}
                    onClick={() => handleHashNavigation("features")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.FEATURES.LIST.1")}
                  </Link>
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
                  <Link
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    to={t("FOOTER.LINKS.NAVBAR.PRICING.LINK")}
                    onClick={() => handleHashNavigation("pricing")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.PRICING.LIST.1")}
                  </Link>
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
                  <Link
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    to={t("FOOTER.LINKS.NAVBAR.CONTRIBUTE.LINK")}
                    onClick={() => handleHashNavigation("contribute")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.CONTRIBUTE.LIST.1")}
                  </Link>
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
                  <Link
                    className="text-(--text-secondary) hover:text-(--text-primary) transition-colors block"
                    to={t("FOOTER.LINKS.NAVBAR.FAQ.LINK")}
                    onClick={() => handleHashNavigation("faq")}
                  >
                    {t("FOOTER.LINKS.NAVBAR.FAQ.LIST.1")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:absolute right-16 top-4 bottom-0 items-center gap-6 mt-6 lg:col-span-3 justify-end">
        <a
          href="https://cafecito.app/marcosdionel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Donate to Reshume"
          className="flex items-center gap-2"
        >
          <span className="text-(--text-primary)">
            {t("FOOTER.LINKS.DONATE")}
          </span>
          <FaHeart className="text-(--primary) text-lg" />
        </a>
        <a
          href="https://github.com/mdiannibelli/reshume"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contribute to Reshume"
          className="flex items-center gap-2"
        >
          <span className="text-(--text-primary)">
            {t("FOOTER.LINKS.CONTRIBUTE")}
          </span>
          <FaGithub className="text-(--text-primary) text-lg" />
        </a>
      </div>

      {/* separator */}
      <div className="w-[95%] md:max-w-2xl xl:max-w-7xl mx-auto bg-(--text-primary) opacity-10 h-px mt-8"></div>
      <footer className="p-8">
        <p className="text-base text-center text-(--text-primary)">
          © {currentYear}{" "}
          <Trans
            i18nKey="FOOTER.COPYRIGHT"
            components={{
              a: (
                <a
                  href="https://mdiannibelli.com"
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
