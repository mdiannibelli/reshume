import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react";
import { useNavHandling } from "@/hooks";
import { Link } from "react-router-dom";

export function MenuResponsive() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { handleHashNavigation, handleToTop } = useNavHandling();
  return (
    <>
      <button
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(!isOpen)}
        className="block lg:hidden mt-1"
      >
        <RxHamburgerMenu className="text-(--text-primary) w-6 h-6" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-(--background-secondary)/50 backdrop-blur-sm z-100"
            />
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 w-[80%] md:w-[60%] h-screen z-200 bg-(--background-secondary)/95 backdrop-blur-md"
            >
              <div className="absolute top-8 px-6 z-10 flex justify-between items-center w-full">
                <Link
                  to="/"
                  onClick={() => {
                    setIsOpen(false);
                    handleToTop("/");
                  }}
                  className="flex items-center gap-x-2"
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
                <button aria-label="Close menu" aria-expanded="true" aria-controls="mobile-menu" onClick={() => setIsOpen(false)}>
                  <RxCross1 className="text-(--text-primary) m-2 w-6 h-6" />
                </button>
              </div>
              <div className="px-8 py-32 flex flex-col justify-between h-full">
                <nav className="flex flex-col gap-y-2 py-8">
                  <Link
                    to="/#features"
                    onClick={() => {
                      setIsOpen(false);
                      handleHashNavigation("features");
                    }}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.FEATURES")}
                  </Link>
                  <Link
                    to="/#pricing"
                    onClick={() => {
                      setIsOpen(false);
                      handleHashNavigation("pricing");
                    }}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.PRICING")}
                  </Link>
                  <Link
                    to="/#contribute"
                    onClick={() => {
                      setIsOpen(false);
                      handleHashNavigation("contribute");
                    }}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.CONTRIBUTE")}
                  </Link>
                  <Link
                    to="/#faq"
                    onClick={() => {
                      setIsOpen(false);
                      handleHashNavigation("faq");
                    }}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.FAQ")}
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
