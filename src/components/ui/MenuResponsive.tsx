import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

export function MenuResponsive() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
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
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 z-10"
              >
                <RxCross1 className="text-(--text-primary) m-2 w-6 h-6" />
              </button>
              <div className="px-8 py-16 flex flex-col justify-between h-full">
                <nav className="flex flex-col gap-y-2 py-8">
                  <Link
                    to="/#features"
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.FEATURES")}
                  </Link>
                  <Link
                    to="/#pricing"
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.PRICING")}
                  </Link>
                  <Link
                    to="/#faq"
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.FAQ")}
                  </Link>
                  <Link
                    to="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-[0.9] text-(--text-primary) text-xl hover:bg-(--background-secondary)/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    {t("NAVBAR.CONTACT")}
                  </Link>
                </nav>
                {/* 
                // TODO Login and register will be implemented soon
                <div className="flex flex-col gap-y-4">
                  <Link
                    to="/login"
                    className="text-(--text-primary) text-lg rounded-full px-4 text-center"
                  >
                    {t("NAVBAR.LOGIN_2")}
                  </Link>
                  <div className="flex items-center gap-x-2">
                    <div className="h-px bg-(--text-secondary)/10 w-full my-2"></div>
                    <span className="text-(--text-secondary)/10">{t("NAVBAR.OR")}</span>
                    <div className="h-px bg-(--text-secondary)/10 w-full my-2"></div>
                  </div>
                  <Link
                    to="/generate-resume"
                    className="bg-(--primary) text-lg text-center text-(--text-primary) font-medium rounded-full px-4 py-2"
                  >
                    {t("NAVBAR.GENERATE_RESUME")}
                  </Link>
                </div> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
