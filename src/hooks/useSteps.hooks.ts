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
        fieldsToValidate = ["skills"];
        break;
      case 5:
        fieldsToValidate = ["language", "wantIcons"];
        break;
    }

    const isValid = await formValues.trigger(fieldsToValidate);

    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      updateFormValues(formValues.getValues());
    }
  };

  return {
    currentStep,
    totalSteps,
    setCurrentStep,
    prevStep,
    nextStep,
    handleSubmit: formValues.handleSubmit,
    formValues,
  };
}
