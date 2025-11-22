import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./beams";
import { Link } from "react-router-dom";

export const LampContainer = ({
    children,
    className,
    btnName
  }: {
    children: React.ReactNode;
    className?: string;
    btnName: string;
  }) => {
    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
          className
        )}
      >
        <BackgroundBeams />

        <div className="relative z-50 flex -translate-y-20 flex-col items-center px-4 md:px-6">
          {children}
        </div>

        <div className="relative flex w-full scale-y-125 items-center justify-center isolate z-10 ">
          <motion.div
            initial={{ opacity: 0, width: "5rem" }}
            whileInView={{ opacity: 1, width: "10rem" }}
            transition={{
              delay: 0,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-28 overflow-visible w-[384px bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-full left-0 bg-black h-8 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-24 h-full left-0 bg-black bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: "5rem" }}
            whileInView={{ opacity: 1, width: "10rem" }}
            transition={{
              delay: 2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-8 w-[324px bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute  w-20 h-full right-0 bg-black  bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]" />
            <div className="absolute  w-full right-0 bg-black h-4 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: "2rem" }}
            whileInView={{ opacity: 1, width: "16rem" }}
            transition={{
              delay: 2,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-8 rounded-full bg-red-500 blur-2xl"
          ></motion.div>
          
        </div>
        <div className="relative z-50 -translate-y-20">

        <motion.button initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-12 hover:translate-y-[-2px] transition-all duration-300">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FECACA_0%,#DC2626_50%,#FECACA_100%)]" />
        <Link to="/generate-resume" className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-red-500 md:px-6 px-4 py-1 text-lg md:text-xl font-medium text-white backdrop-blur-3xl">
          {btnName}
        </Link>
        </motion.button>
            </div>
   
        
      </div>
    );
  };