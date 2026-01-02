import { useUI } from "@/hooks";
import type { StepperProps } from "@/interfaces";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";

export function Stepper({
  currentStep,
  totalSteps,
  steps,
  handleStepClick,
}: StepperProps) {
  const { t } = useTranslation();
  const { setIsPDFModalOpen } = useUI();

  const handlePDFModalOpen = () => {
    setIsPDFModalOpen(true);
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto mb-12">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 mx-4 justify-center md:justify-between relative">
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
                onClick={(e) => {
                  e.preventDefault();
                  handleStepClick(stepNumber);
                }}
                className="flex flex-col items-center relative z-10 cursor-pointer"
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
                        ? "text-red-500"
                        : isCompleted
                        ? "text-white"
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
      {/* <div className="flex justify-end my-4">
      // TODO Preview modal will be implemented late, in another feature, because actually it doesn't work as expected
        <button
          type="button"
          onClick={handlePDFModalOpen}
          className="flex items-center px-6 py-2 bg-red-500 hover:bg-red-600 duration-300 cursor-pointer transition-all text-white rounded-lg font-medium"
        >
          <FaEye className="w-4 h-4 mr-2" />
          <span>{t("GENERATE_RESUME.FORM_STEPS.OPEN_PREVIEW")}</span>
        </button>
      </div> */}
    </>
  );
}
