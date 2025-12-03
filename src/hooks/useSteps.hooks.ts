import { FORM_STEPS } from "@/constants";
import { resumeSchema } from "@/models";
import type { ResumeData } from "@/types/resume.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = FORM_STEPS.length;

  const formValues = useForm<ResumeData>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      personalInfo: {
        nombre: "",
        apellido: "",
        tituloProfesional: "",
        correo: "",
        telefono: "",
        pais: "",
        ciudad: "",
        sitioWeb: "",
        linkedin: "",
        github: "",
        resumenProfesional: "",
      },
      educacion: [],
      experiencia: [],
      habilidades: [],
    },
    mode: "onChange",
  });

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof ResumeData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["personalInfo"];
        break;
      case 2:
        fieldsToValidate = ["educacion"];
        break;
      case 3:
        fieldsToValidate = ["experiencia"];
        break;
      case 4:
        fieldsToValidate = ["habilidades"];
        break;
    }

    const isValid = await formValues.trigger(
      fieldsToValidate as (keyof ResumeData)[]
    );

    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
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
