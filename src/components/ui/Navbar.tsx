import { Link } from "react-router-dom";
import { LanguageSelector, MenuResponsive } from "@components/ui";
import { useTranslation } from "react-i18next";
import { useNavHandling } from "@/hooks";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();
  const { handleHashNavigation, isScrolled, handleToTop } = useNavHandling();

  return (
    <div className="inset-x-0 z-20 transition-all duration-500 fixed">
      <header
        className={cn(
          "flex justify-between lg:grid lg:grid-cols-4 items-center px-6 md:px-8 lg:px-4 transition-all duration-500",
          isScrolled
            ? "bg-(--background-secondary)/50 backdrop-blur-md "
            : "relative py-3"
        )}
      >
        <div className="flex items-center gap-x-4 col-span-1 max-w-2xl lg:mx-auto">
          <div className="block lg:hidden">
            <MenuResponsive />
          </div>
          <Link
            to="/"
            onClick={() => handleToTop("/")}
            className="hidden lg:flex items-center gap-x-2"
          >
            <div className="rounded-xl h-10 w-10 border-(--background) border-2">
              <img
                src="/reshume.svg"
                alt="Reshume logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-(--text-secondary)">
              {t("NAVBAR.TITLE")}
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex flex-1 justify-center col-span-2">
          <Link
            to="/#features"
            onClick={() => handleHashNavigation("features")}
            className="hover:opacity-[0.9] text-(--text-primary) hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.FEATURES")}
          </Link>
          <Link
            to="/#pricing"
            onClick={() => handleHashNavigation("pricing")}
            className="hover:opacity-[0.9] text-(--text-primary) hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.PRICING")}
          </Link>
          <Link
            to="/#contribute"
            onClick={() => handleHashNavigation("contribute")}
            className="hover:opacity-[0.9] text-(--text-primary) hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.CONTRIBUTE")}
          </Link>
          <Link
            to="/#faq"
            onClick={() => handleHashNavigation("faq")}
            className="hover:opacity-[0.9] text-(--text-primary) hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.FAQ")}
          </Link>
        </nav>
        <div className="flex items-center gap-x-2 xl:gap-x-4 justify-end lg:mx-auto col-span-1">
          <LanguageSelector />
          <div className="bg-(--primary-hover) rounded-full text-sm px-4 md:px-3 xl:text-base xl:px-6 py-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer">
            <Link
              to="/generate-resume"
              className=" text-(--text-primary) font-medium"
            >
              {t("NAVBAR.GENERATE_RESUME")}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
