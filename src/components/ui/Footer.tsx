import { FaGithub, FaHeart } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className="absolute bottom-0 w-full">
        <div className="w-[80%] md:max-w-2xl xl:max-w-7xl mx-auto bg-white opacity-5 h-px"></div>
      <footer className="flex flex-col justify-center items-center p-8">
            <p className="text-xs text-center text-slate-100">{t("FOOTER.COPYRIGHT")}</p>
            <div className="flex gap-x-8 mt-4 items-center pt-2">
            <a href="https://github.com/mdiannibelli/harvard-resume-generator" target="_blank" className="flex items-center gap-2">
                <FaGithub className="text-white" />
                <span className="text-xs text-slate-100">{t("FOOTER.LINKS.CONTRIBUTE")}</span>
            </a>
            {/* // TODO change donate link */}
            <a href="https://www.buymeacoffee.com/harvardresumegenerator" target="_blank" className="flex items-center gap-2">
                <FaHeart className="text-red-500"/>
                <span className="text-xs text-slate-100">{t("FOOTER.LINKS.DONATE")}</span>
            </a>
            </div>
      </footer>
    </div>
  );
};
