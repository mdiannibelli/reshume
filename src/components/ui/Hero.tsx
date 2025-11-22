import { LampContainer } from "@/shared/components";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";


export function Hero() {
  const { t } = useTranslation();
    return (
      <LampContainer btnName={t("HERO.CTA")}>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-3xl font-light tracking-tight text-transparent md:text-4xl"
        >
        {t("HERO.SUBTITLE")}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-5xl xl:text-7xl"
        >
          {t("HERO.TITLE")}
        </motion.h1>
      </LampContainer>
    );
  }