import { FORM_STEPS } from "@/constants";
import { resumeSchema } from "@/models";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type Path } from "react-hook-form";
import type { ResumeDataSchema } from "@/models/resume.models";
import { useFormStore } from "./useFormStore.hooks";

export function useSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = FORM_STEPS.length;
  const { formData, updateFormValues } = useFormStore();

  const formValues = useForm<ResumeDataSchema>({
    resolver: zodResolver(resumeSchema),
    defaultValues: formData,
    mode: "onChange",
  });

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = async () => {
    const isValid = await validateStep();
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      updateFormValues(formValues.getValues());
    }
  };

  const handleStepClick = async (step: number) => {
    if (step !== currentStep) {
      const isValid = await validateStep();
      if (!isValid) {
        return;
      }
      setCurrentStep(step);
      updateFormValues(formValues.getValues());
    }
  };

  const validateStep = async () => {
    let fieldsToValidate: Path<ResumeDataSchema>[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["personalInfo"];
        break;
      case 2:
        fieldsToValidate = ["education"];
        break;
      case 3:
        fieldsToValidate = ["experience"];
        break;
      case 4:
        fieldsToValidate = ["skills", "languages"];
        break;
      case 5:
        fieldsToValidate = [
          "selectedCvLanguage",
          "template",
          "wantIcons",
          "clearFieldsAfterGeneration",
        ];
        break;
    }

    const isValid = await formValues.trigger(fieldsToValidate);
    return isValid;
  };

  return {
    currentStep,
    totalSteps,
    setCurrentStep,
    handleStepClick,
    prevStep,
    nextStep,
    handleSubmit: formValues.handleSubmit,
    formValues,
  };
}
