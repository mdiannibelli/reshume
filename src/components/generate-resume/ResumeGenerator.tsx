import {
  ConfigurationStep,
  PersonalInfoStep,
  EducationStep,
  ExperienceStep,
  SkillsStep,
} from "./steps";
import { FormProvider } from "react-hook-form";
import { Stepper } from "./Stepper";
import { FORM_STEPS } from "@/constants";
import { useFormStore, useSteps, useUI } from "@/hooks";
import { useTranslation } from "react-i18next";
import { useGeneratePdf } from "@/hooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastService } from "@/services";
import { TOAST_CONFIG } from "@/config";

export function ResumeGenerator() {
  const {
    currentStep,
    totalSteps,
    handleSubmit,
    prevStep,
    nextStep,
    handleStepClick,
    formValues,
  } = useSteps();
  const { t } = useTranslation();
  const { formData, resetForm } = useFormStore();

  const location = useLocation();

  const { generatePDF } = useGeneratePdf();
  const { setIsPDFModalOpen, isPDFModalOpen } = useUI();

  useEffect(() => {
    setIsPDFModalOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const onSubmit = async () => {
    const success = await generatePDF(formData);
    if (success) {
      setIsPDFModalOpen(true);
    }
    if (formData.clearFieldsAfterGeneration) {
      resetForm();
    }
    ToastService().success(t("GENERATE_RESUME.TOASTS.SUCCESS"), TOAST_CONFIG);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && currentStep < totalSteps) {
      e.preventDefault();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <EducationStep />;
      case 3:
        return <ExperienceStep />;
      case 4:
        return <SkillsStep />;
      case 5:
        return <ConfigurationStep />;
      default:
        return null;
    }
  };

  return (
    // TODO Preview modal will be implemented late, in another feature, because actually it doesn't work as expected
    <>
      {/* {isPDFModalOpen && (
        <PDFModal
          formData={formData}
          onClose={() => setIsPDFModalOpen(false)}
        />
      )} */}
      <div className="w-full max-w-4xl mx-auto p-8">
        <FormProvider {...formValues}>
          <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
            <Stepper
              currentStep={currentStep}
              totalSteps={totalSteps}
              steps={FORM_STEPS}
              handleStepClick={handleStepClick}
            />

            {renderStep()}

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 bg-(--border-light) cursor-pointer text-(--text-primary) rounded-lg hover:bg-(--border-hover) transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {t("GENERATE_RESUME.PREVIOUS")}
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    nextStep();
                  }}
                  className="px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) duration-300 cursor-pointer transition-all text-(--text-primary) rounded-lg font-medium"
                >
                  {t("GENERATE_RESUME.NEXT")}
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) duration-300 cursor-pointer transition-all text-(--text-primary) rounded-lg font-medium"
                >
                  {t("GENERATE_RESUME.GENERATE")}
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
