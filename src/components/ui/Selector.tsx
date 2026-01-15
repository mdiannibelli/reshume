import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { RiArrowDownSLine, RiCheckLine, RiStarSFill } from "react-icons/ri";
import type { Selector, SelectorOption } from "@/interfaces";
import { MdOutlineLockClock } from "react-icons/md";

export function Selector<T extends SelectorOption>({
  options,
  selectedOption,
  onSelect,
  placeholder,
  error = false,
  onBlur,
  className,
}: Selector<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onBlur?.();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onBlur]);

  const handleSelect = (option: T) => {
    onSelect(option);
    setIsOpen(false);
    onBlur?.();
  };

  const handleClear = () => {
    onSelect(null);
    setIsOpen(false);
    onBlur?.();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full p-6 bg-(--background-secondary) border rounded-lg text-(--text-primary) focus:outline-none focus:ring-1 focus:ring-(--primary) focus:border-transparent transition-all flex items-center justify-between",
          error ? "border-(--primary)" : "border-(--border)",
          isOpen && "ring-1 ring-(--primary) border-(--primary)",
          className
        )}
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          {selectedOption ? (
            <>
              {selectedOption.decorator && (
                <span
                  className={cn(
                    "px-2 py-1 text-xs font-medium rounded",
                    selectedOption.decorator.color
                  )}
                >
                  {t(selectedOption.decorator.label)}
                </span>
              )}
              <span className="font-medium">{t(selectedOption.name)}</span>
            </>
          ) : (
            <span className="text-(--text-secondary)">{placeholder}</span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <RiArrowDownSLine className="text-xl text-(--text-secondary)" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-(--background-secondary) border border-(--border) rounded-lg shadow-lg overflow-hidden"
          >
            <div className="max-h-64 overflow-y-auto">
              <button
                type="button"
                onClick={handleClear}
                className={cn(
                  "w-full p-4 text-left hover:bg-(--background)/50 transition-colors",
                  !selectedOption && "bg-(--background)/50"
                )}
              >
                <span className="text-(--text-secondary)">{placeholder}</span>
              </button>

              {options.map((option) => {
                const isSelected = selectedOption?.id === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelect(option)}
                    disabled={
                      option.decorator?.label === "DECORATORS.UNAVAILABLE"
                    }
                    className={cn(
                      "w-full p-4 text-left hover:bg-(--background)/50 transition-colors border-t border-(--border)",
                      isSelected && "bg-(--background)/50",
                      option.decorator?.label === "DECORATORS.UNAVAILABLE" &&
                        "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-4 flex-1">
                        {option.decorator && (
                          <div className="w-12 flex justify-center">
                            {option.decorator.label === "DECORATORS.PREMIUM" ? (
                              <RiStarSFill className="text-2xl text-(--premium)" />
                            ) : option.decorator.label ===
                              "DECORATORS.UNAVAILABLE" ? (
                              <MdOutlineLockClock className="text-2xl text-(--error)" />
                            ) : (
                              <span
                                className={cn(
                                  "px-2 py-1 text-xs font-medium rounded mt-0.5 text-(--text-primary)",
                                  option.decorator.color
                                )}
                              >
                                {t(option.decorator.label)}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex-1 relative">
                          <span className="font-medium text-(--text-primary) mb-1">
                            {t(option.name)}
                          </span>
                          <p className="text-sm text-(--text-secondary)">
                            {option.description && t(option.description)}
                          </p>
                          {option.decorator?.label ===
                            "DECORATORS.UNAVAILABLE" && (
                            <span className="text-xs text-(--warning) absolute right-0 -bottom-2">
                              {t("DECORATORS.COMING_SOON")}
                            </span>
                          )}
                        </div>
                      </div>
                      {isSelected && (
                        <RiCheckLine className="text-(--primary) shrink-0 text-2xl" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
