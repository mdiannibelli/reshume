import { Link } from "react-router-dom";
import { LanguageSelector, MenuResponsive } from "@components/ui";
import { useTranslation } from "react-i18next";
import { useNavHandling } from "@/hooks";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();
  const { handleHashNavigation } = useNavHandling();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link to="/" className="hidden lg:block">
            {/* // TODO Insert logo */}
            Reshume
          </Link>
        </div>
        <nav className="hidden lg:flex flex-1 justify-center col-span-2">
          <a
            href="/#features"
            onClick={() => handleHashNavigation("features")}
            className="hover:opacity-[0.9] text-white hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.FEATURES")}
          </a>
          <a
            href="/#pricing"
            onClick={() => handleHashNavigation("pricing")}
            className="hover:opacity-[0.9] text-white hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.PRICING")}
          </a>
          <a
            href="/#contribute"
            onClick={() => handleHashNavigation("contribute")}
            className="hover:opacity-[0.9] text-white hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.CONTRIBUTE")}
          </a>
          <a
            href="/#faq"
            onClick={() => handleHashNavigation("faq")}
            className="hover:opacity-[0.9] text-white hover:bg-(--border-light) rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.FAQ")}
          </a>
        </nav>
        <div className="flex items-center gap-x-2 xl:gap-x-4 justify-end lg:mx-auto col-span-1">
          <LanguageSelector />
          <div className="bg-(--primary) rounded-full text-sm px-4 md:px-3 xl:text-base xl:px-6 py-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer">
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
