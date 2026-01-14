import { SectionWrapper } from "@/layouts";
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
    <SectionWrapper resetStyles className="pt-64 md:pt-96">
      <LampContainer btnName={t("HERO.CTA")} features={features}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          className="bg-linear-to-br from-(--text-secondary) to-white bg-clip-text md:text-center font-light tracking-tight text-transparent text-2xl md:text-3xl"
        >
          {t("HERO.SUBTITLE")}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-linear-to-br from-(--text-secondary) to-white py-4 bg-clip-text md:text-center font-medium tracking-tight text-transparent leading-14 text-5xl md:leading-18 lg:text-7xl lg:leading-22 whitespace-pre-line"
        >
          {t("HERO.TITLE")}
        </motion.h1>
      </LampContainer>
    </SectionWrapper>
  );
}
