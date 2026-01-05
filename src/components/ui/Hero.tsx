import { LampContainer } from "@/shared/components";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const features = [
    t("HERO.FEATURES.1"),
    t("HERO.FEATURES.2"),
    t("HERO.FEATURES.3"),
  ];
  return (
    <LampContainer btnName={t("HERO.CTA")} features={features}>
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-(--text-secondary) to-white bg-clip-text text-center text-2xl font-light tracking-tight text-transparent md:text-3xl"
      >
        {t("HERO.SUBTITLE")}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-(--text-secondary) to-white py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-4xl leading-12 md:text-6xl md:leading-18 lg:text-7xl lg:leading-22 whitespace-pre-line"
      >
        {t("HERO.TITLE")}
      </motion.h1>
    </LampContainer>
  );
}
