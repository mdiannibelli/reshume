import { FaGithub, FaHeart } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <div className="absolute bottom-0 w-full">
      <div className="w-[80%] md:max-w-2xl xl:max-w-7xl mx-auto bg-(--text-primary) opacity-10 h-px"></div>
      <footer className="flex flex-col justify-center items-center p-8">
        <p className="text-xs text-center text-(--text-primary)">
          {`© ${currentYear} ${t("FOOTER.COPYRIGHT")}`}
        </p>
        <div className="flex gap-x-8 mt-4 items-center pt-2">
          <a
            href="https://github.com/mdiannibelli/reshume"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaGithub className="text-(--text-primary)" />
            <span className="text-xs text-(--text-primary)">
              {t("FOOTER.LINKS.CONTRIBUTE")}
            </span>
          </a>
          <a
            href="https://cafecito.app/marcosdionel"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaHeart className="text-(--primary)" />
            <span className="text-xs text-(--text-primary)">
              {t("FOOTER.LINKS.DONATE")}
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
