import { LampContainer } from "@/shared/components";
import { motion } from "motion/react";


export function Hero() {
    return (
      <LampContainer>
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
          generate your resume with
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-6xl lg:text-7xl"
        >
          Harvard Resume Generator
        </motion.h1>
        {/* <motion.button initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-12">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FECACA_0%,#DC2626_50%,#FECACA_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-red-500 md:px-6 px-4 py-1 text-lg md:text-xl font-medium text-white backdrop-blur-3xl">
          Generate resume
        </span>
        </motion.button> */}
      </LampContainer>
    );
  }