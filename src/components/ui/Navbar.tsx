import { Link } from "react-router-dom";
import { LanguageSelector, MenuResponsive } from "@components/ui";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="absolute top-8 inset-x-0 z-50">
      <header className="flex justify-between lg:grid lg:grid-cols-3 items-center px-6 md:px-8 lg:px-4">
        <div className="flex items-center gap-x-4 col-span-1 max-w-2xl lg:mx-auto">
          <div className="block lg:hidden">
            <MenuResponsive />
          </div>
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>
        </div>
        <nav className="hidden lg:flex flex-1 justify-center col-span-1">
          <Link
            to="/"
            className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.HOME")}
          </Link>
          <Link
            to="/about-us"
            className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.ABOUT")}
          </Link>
          <Link
            to="/contact-us"
            className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.CONTACT")}
          </Link>
        </nav>
        <div className="flex items-center gap-x-4 justify-end lg:mx-auto col-span-1">
          <div className="block lg:hidden">
            <LanguageSelector />
          </div>
          <Link
            to="/auth/login"
            className="hidden lg:block text-white bg-black hover:translate-y-[-2px] rounded-full px-4 xl:px-6 py-2 transition-all duration-300"
          >
            {t("NAVBAR.LOGIN")}
          </Link>
          <Link
            to="/generate-resume"
            className="bg-red-500 text-white font-medium rounded-full hover:translate-y-[-2px] px-4 md:px-6 py-2 transition-all duration-300"
          >
            {t("NAVBAR.GENERATE_RESUME")}
          </Link>
        </div>
      </header>
    </div>
  );
}
