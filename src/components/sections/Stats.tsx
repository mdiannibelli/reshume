import { IMPROVES_FEATURES } from "@/constants";
import { STATS } from "@/constants/stats.constant";
import { SectionWrapper } from "@/layouts";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { AnimatedCounter } from "@/components/ui";

export function Stats() {
  const { t } = useTranslation();

  return (
    <SectionWrapper resetStyles>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative overflow-x-clip overflow-y-visible lg:overflow-visible max-w-3xl md:max-w-full lg:max-w-2xl xl:max-w-6xl mx-auto px-6 md:px-12 lg:px-8 py-8 lg:py-0"
      >
        <div className="relative rounded-xl overflow-hidden shadow-4xl transition-transform duration-300 ease-out rotate-3d image-fade-gradient">
          <img
            src="/imgs/home/hero.jpg"
            alt="Reshume Showcase Image"
            className="w-full h-auto object-cover"
          ></img>
        </div>
      </motion.div>

      <div className="relative pt-32 lg:pt-48 xl:pt-64 w-full">
        <div className="absolute inset-0 bg-linear-to-b from-(--primary-darker)/0 via-(--primary-darker)/50 to-(--primary-darker)/0 z-0"></div>
        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="flex flex-col items-center text-center">
            <span className="bg-clip-text text-transparent bg-linear-to-r text-xl from-white to-(--text-secondary)">
              {t("HOME.STATISTICS.TITLE")}
            </span>
            <p className="text-sm md:text-lg text-(--text-secondary) mt-2">
              {t("HOME.STATISTICS.DESCRIPTION")}
            </p>
          </div>
          <div className="flex gap-8 mt-12 w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-linear-to-r from-(--primary) blur-3xl to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-linear-to-l from-(--primary) blur-3xl to-transparent z-10 pointer-events-none"></div>
            <div className="relative w-full">
              <div className="flex infinite-scroll">
                <div className="flex flex-nowrap">
                  {IMPROVES_FEATURES.map((improve) => (
                    <div
                      key={improve.id}
                      className="flex items-center mx-4 md:mx-6"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-1.5 border border-white/5 hover:bg-white/20 transition-colors duration-300">
                        <span className="text-(--text-primary) whitespace-nowrap">
                          {t(improve.title)}
                        </span>
                      </div>
                    </div>
                  ))}
                  {IMPROVES_FEATURES.map((improve) => (
                    <div
                      key={`duplicate-${improve.id}`}
                      className="flex items-center mx-4 md:mx-6"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-1.5 border border-white/5 hover:bg-white/20 transition-colors duration-300">
                        <span className="text-(--text-primary) whitespace-nowrap">
                          {t(improve.title)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center mt-10 md:mt-16">
            {STATS.map((stat) => {
              const titleText = t(stat.title);
              const match = titleText.match(/(\d+)(.*)/);
              const number = match ? parseInt(match[1], 10) : 0;
              const suffix = match ? match[2] : "";

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="p-6 text-center"
                >
                  <div className="text-6xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-(--primary) to-(--primary-dark)">
                      <AnimatedCounter value={number} suffix={suffix} />
                    </span>
                  </div>
                  <p className="text-(--text-primary) mt-3">
                    {t(stat.description)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
