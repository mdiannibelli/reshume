import { useState } from "react";
import { motion } from "motion/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
export function ContactForSuggestion() {
  const { t } = useTranslation();
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isBackgroundHovered, setIsBackgroundHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden border border-(--border-light) transition-all duration-300"
      onMouseEnter={() => setIsBackgroundHovered(true)}
      onMouseLeave={() => setIsBackgroundHovered(false)}
      animate={{
        boxShadow: isBackgroundHovered
          ? "0 8px 50px rgba(239, 68, 68, 0.3), 0 8px 40px rgba(0,0,0,0.4)"
          : "0 8px 40px rgba(0,0,0,0.4)",
        borderColor: isBackgroundHovered
          ? "rgba(239, 68, 68, 0.2)"
          : "rgba(255, 255, 255, 0.07)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-(--primary-darker) to-(--primary-darker)/35 z-0"></div>
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-(--primary-hover) rounded-full filter blur-[120px] z-0"
        animate={{
          opacity: isBackgroundHovered ? 0.3 : 0.2,
          scale: isBackgroundHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-(--primary-hover) rounded-full filter blur-[120px] z-0"
        animate={{
          opacity: isBackgroundHovered ? 0.3 : 0.2,
          scale: isBackgroundHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
      <div className="px-8 py-12 md:py-16 text-center relative z-10">
        <div style={{ opacity: 1, transform: "none" }}>
          <span className="text-transparent bg-clip-text bg-linear-to-r text-3xl md:text-4xl font-bold mb-6 from-white to-(--text-primary)/90">
            {t("HOME.CONTACT_ME.TITLE")}
          </span>
          <p className="text-xl text-(--text-secondary) max-w-2xl mx-auto mt-6 mb-10">
            {t("HOME.CONTACT_ME.DESCRIPTION")}
          </p>
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-(--primary) to-(--primary-dark) rounded-md blur-xl opacity-40"
              animate={{
                scale: isButtonHovered ? 1.05 : 1.02694,
                boxShadow: isButtonHovered
                  ? "rgba(239, 68, 68, 0.7) 0px 0px 25px"
                  : "rgba(239, 68, 68, 0.58) 0px 0px 21.2854px",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              style={{ zIndex: 0 }}
            ></motion.div>
            <motion.a
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              href="https://www.linkedin.com/in/marcos-dionel-iannibelli-1b3827254/"
              target="_blank"
              className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-(--primary) text-primary-foreground hover:bg-(--primary-hover) h-11 rounded-md relative bg-linear-to-r from-(--primary) to-(--primary-dark) hover:opacity-90 transition-all shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] text-lg px-10 py-6 whitespace-nowrap cursor-pointer"
              id="signup-button"
              animate={{
                boxShadow: isButtonHovered
                  ? "0 0 20px rgba(239, 68, 68, 0.7)"
                  : "0 0 15px rgba(239, 68, 68, 0.5)",
                transform: isButtonHovered ? "scale(1.05)" : "scale(1)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              style={{ zIndex: 1, position: "relative" }}
            >
              <span className="flex gap-2 text-lg items-center text-(--text-primary)">
                <p>{t("HOME.CONTACT_ME.BUTTON")}</p>
                <MdKeyboardArrowRight className="text-2xl text-(--text-primary)" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
