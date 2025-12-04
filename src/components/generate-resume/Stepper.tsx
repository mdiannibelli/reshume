import type { StepperProps } from "@/interfaces";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Stepper({ currentStep, totalSteps, steps }: StepperProps) {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-white opacity-5 -z-10">
          <motion.div
            className="h-full bg-linear-to-r from-blue-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div
              key={stepNumber}
              className="flex flex-col items-center relative z-10"
            >
              <motion.div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  border-2 transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-red-500 border-transparent"
                      : isActive
                      ? "bg-black border-red-500 shadow-lg shadow-red-500/50"
                      : "bg-black border-white/10"
                  }
                `}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {isCompleted ? (
                  <motion.svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                ) : (
                  <span
                    className={`
                      text-sm font-semibold cursor-default
                      ${isActive ? "text-red-400" : "text-white/10"}
                    `}
                  >
                    {stepNumber}
                  </span>
                )}
              </motion.div>

              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p
                  className={`
                    text-sm font-medium cursor-default
                    ${
                      isActive
                        ? "text-white"
                        : isCompleted
                        ? "text-gray-400"
                        : "text-white/10"
                    }
                  `}
                >
                  {t(`GENERATE_RESUME.FORM_STEPS.${step}.TITLE`)}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
