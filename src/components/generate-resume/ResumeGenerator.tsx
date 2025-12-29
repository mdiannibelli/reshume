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
import { useFormStore, useSteps } from "@/hooks";
import { useTranslation } from "react-i18next";
import { useGeneratePdf } from "@/hooks";

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

  const { generatePDF } = useGeneratePdf();

  const onSubmit = async () => {
    await generatePDF(formData);
    if (formData.clearFieldsAfterGeneration) {
      resetForm();
    }
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
    <>
      <div className="w-full max-w-4xl mx-auto px-6 py-8">
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
                className="px-6 py-3 bg-white/5 cursor-pointer text-white rounded-lg hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
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
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 duration-300 cursor-pointer transition-all text-white rounded-lg font-medium"
                >
                  {t("GENERATE_RESUME.NEXT")}
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 duration-300 cursor-pointer transition-all text-white rounded-lg font-medium"
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
