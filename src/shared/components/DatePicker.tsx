import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export function DatePicker({
  value,
  placeholder,
  onChange,
  onBlur,
  disabled = false,
  error = false,
  className,
}: DatePickerProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const parsedValue = value ? value.split("-") : [null, null];
  const selectedYear = parsedValue[0] ? parseInt(parsedValue[0]) : null;
  const selectedMonth = parsedValue[1] ? parseInt(parsedValue[1]) : null;

  const currentYear = new Date().getFullYear();
  const [displayYear, setDisplayYear] = useState(selectedYear || currentYear);

  const getMonthNames = () => {
    const locale = i18n.language === "es" ? "es-ES" : "en-US";
    return Array.from({ length: 12 }, (_, i) => {
      const date = new Date(2000, i, 1);
      return date.toLocaleDateString(locale, { month: "short" });
    });
  };

  const months = getMonthNames();

  // Close dropdown when clicking outside
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

  const handlePreviousYear = () => {
    setDisplayYear((prev) => Math.max(1960, prev - 1));
  };

  const handleNextYear = () => {
    setDisplayYear((prev) => Math.min(currentYear + 10, prev + 1));
  };

  const handleMonthSelect = (month: number) => {
    const formattedDate = `${displayYear}-${String(month).padStart(2, "0")}`;
    onChange(formattedDate);
    setIsOpen(false);
    onBlur?.();
  };

  const getDisplayValue = () => {
    if (selectedYear && selectedMonth) {
      const monthName = months[selectedMonth - 1];
      const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
      return `${capitalizedMonth} ${selectedYear}`;
    }
    return null;
  };

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setDisplayYear(selectedYear || currentYear);
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-label="Open date picker"
        onClick={handleOpen}
        disabled={disabled}
        className={cn(
          "w-full px-4 py-3 bg-(--background-secondary) border rounded-lg text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all flex items-center justify-between",
          error ? "border-(--primary)" : "border-(--border)",
          isOpen && "ring-2 ring-(--primary) border-(--primary)",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <span className={cn(!getDisplayValue() && "text-(--text-secondary)")}>
          {getDisplayValue() || placeholder}
        </span>
        <svg
          className="w-5 h-5 text-(--text-secondary)"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
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
            {/* Header with year navigation */}
            <div className="flex items-center justify-between p-4 border-b border-(--border) bg-(--background)">
              <button
                type="button"
                onClick={handlePreviousYear}
                className="p-1 hover:bg-(--background-secondary) rounded transition-colors"
                aria-label="Previous year"
              >
                <svg
                  className="w-6 h-6 text-(--text-primary)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <span className="text-lg font-semibold text-(--text-primary)">
                {displayYear}
              </span>

              <button
                type="button"
                onClick={handleNextYear}
                className="p-1 hover:bg-(--background-secondary) rounded transition-colors"
                aria-label="Next year"
              >
                <svg
                  className="w-6 h-6 text-(--text-primary)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Month grid */}
            <div className="grid grid-cols-3 gap-2 p-4">
              {months.map((month, index) => {
                const monthValue = index + 1;
                const isSelected =
                  selectedYear === displayYear && selectedMonth === monthValue;
                const capitalizedMonth =
                  month.charAt(0).toUpperCase() + month.slice(1);
                return (
                  <button
                    key={month}
                    type="button"
                    onClick={() => handleMonthSelect(monthValue)}
                    className={cn(
                      "p-3 rounded-lg text-sm font-medium transition-all",
                      "hover:bg-(--background) hover:scale-105",
                      isSelected
                        ? "bg-(--primary) text-(--text-primary)"
                        : "bg-(--background-secondary) text-(--text-primary)"
                    )}
                  >
                    {capitalizedMonth}
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
