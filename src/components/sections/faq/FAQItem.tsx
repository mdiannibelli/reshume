import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "border rounded-xl  overflow-hidden transition-all duration-300",
        isOpen
          ? "border-(--primary) bg-(--primary-dark)/5"
          : "border-(--border-light) hover:border-(--border-hover) bg-(--background-secondary)"
      )}
    >
      <button
        aria-label="Toggle FAQ item"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full px-6 py-8 flex items-center justify-between gap-4 text-left focus:outline-none rounded-xl"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-semibold text-(--text-primary) flex-1">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="shrink-0"
        >
          <FaChevronDown className="w-5 h-5 text-(--text-secondary)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
