import { Link } from "react-router-dom";
import { LanguageSelector, MenuResponsive, TopBanner } from "@components/ui";
import { useTranslation } from "react-i18next";
import { useUI } from "@/hooks";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();
  const { isStickyBannerOpen } = useUI();
  return (
    <div className="absolute inset-x-0 z-20">
      <TopBanner />
      <header
        className={cn(
          "relative top-3 flex justify-between lg:grid lg:grid-cols-3 items-center px-6 md:px-8 lg:px-4",
          isStickyBannerOpen ? "md:top-12" : "top-3"
        )}
      >
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
            to="/#features"
            className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.FEATURES")}
          </Link>
          <Link
            to="/#pricing"
            className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.PRICING")}
          </Link>
          <Link
            to="/#faq"
            className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.FAQ")}
          </Link>
          <Link
            to="/#contact"
            className="hover:opacity-[0.9] text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
          >
            {t("NAVBAR.CONTACT")}
          </Link>
        </nav>
        <div className="flex items-center gap-x-4 justify-end lg:mx-auto col-span-1">
          <div className="block lg:hidden">
            <LanguageSelector />
          </div>

          {/*
          // TODO Login and register will be implemented soon 
          <Link
            to="/auth/login"
            className="hidden lg:block text-white bg-black hover:translate-y-[-2px] rounded-full px-4 xl:px-6 py-2 transition-all duration-300"
          >
            {t("NAVBAR.LOGIN")}
          </Link> */}
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
