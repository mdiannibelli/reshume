import React, { type SVGProps, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { useUI } from "@/hooks";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const { isStickyBannerOpen, setIsStickyBannerOpen } = useUI();
  //const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll && latest > 40) {
      setIsStickyBannerOpen(false);
    } else {
      setIsStickyBannerOpen(true);
    }
  });

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-40 flex min-h-14 w-full items-center justify-center bg-(--primary-dark) px-4 py-1",
        className
      )}
      animate={{
        y: isStickyBannerOpen ? 0 : -100,
        opacity: isStickyBannerOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}

      <motion.button
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
        onClick={() => setIsStickyBannerOpen(!isStickyBannerOpen)}
      >
        <CloseIcon className="h-5 w-5 text-(--text-primary)" />
      </motion.button>
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
