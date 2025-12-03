import { FormProvider } from "react-hook-form";
import type { ResumeData } from "@/types/resume.types";
import { Stepper } from "./Stepper";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { EducationStep } from "./steps/EducationStep";
import { ExperienceStep } from "./steps/ExperienceStep";
import { SkillsStep } from "./steps/SkillsStep";
import { FORM_STEPS } from "@/constants";
import { useSteps } from "@/hooks";

export function ResumeGenerator() {
  const { currentStep, totalSteps, handleSubmit, prevStep, nextStep, formValues } = useSteps();

  const onSubmit = (data: ResumeData) => {
    console.log("Datos del currículum:", data);
    // Aquí puedes agregar la lógica para generar el PDF o guardar los datos
    alert("¡Formulario completado! Revisa la consola para ver los datos.");
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
      default:
        return null;
    }
  };

  return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <FormProvider {...formValues}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stepper currentStep={currentStep} totalSteps={totalSteps} steps={FORM_STEPS} />

            <div className="bg-black/90 border border-white/5 rounded-xl p-8 max-h-[700px] overflow-y-auto">
              {renderStep()}
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Anterior
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 duration-300 cursor-pointer transition-all text-white rounded-lg font-medium"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 duration-300 cursor-pointer transition-all text-white rounded-lg font-medium"
                >
                  Generar Currículum
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
  );
}
