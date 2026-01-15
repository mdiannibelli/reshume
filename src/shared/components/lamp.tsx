import React from "react";
import { motion } from "motion/react";
import { BackgroundBeams } from "./beams";
import { Link } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";

export const LampContainer = ({
  children,
  btnName,
  features,
}: {
  children: React.ReactNode;
  btnName: string;
  features: string[];
}) => {
  return (
    <>
      <BackgroundBeams />

      <div className="relative z-50 flex -translate-y-20 flex-col items-start md:items-center px-8">
        {children}
      </div>

      {/* Button light */}
      <div className="relative flex w-full scale-y-125 items-center justify-center isolate z-10 ">
        <motion.div
          initial={{ opacity: 0, width: "2rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 1.4,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 z-30 h-8 rounded-full bg-(--primary) blur-2xl"
        ></motion.div>
      </div>
      {/* Button */}
      <div className="relative z-50 -translate-y-20 flex">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 2.8,
            duration: 1,
            ease: "easeInOut",
          }}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-(--border) focus:ring-offset-2 focus:ring-offset-(--background-secondary) mt-12 hover:translate-y-[-2px] transition-all duration-300"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FECACA_0%,#DC2626_50%,#FECACA_100%)]" />
          <Link
            to="/generate-resume"
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-(--primary) px-8 py-1 text-lg md:text-xl font-medium text-(--text-primary) backdrop-blur-3xl"
          >
            {btnName}
          </Link>
        </motion.button>
      </div>
      {/* Features */}
      <div className="relative z-50">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="hidden md:flex gap-8 text-sm text-(--text-primary)"
        >
          {features.map((feature) => (
            <motion.li className="flex items-center gap-2" key={feature}>
              <IoCheckmark className="text-lg text-(--primary)" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};
