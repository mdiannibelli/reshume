import type { AdditionalArea } from "@/types";
import type { Control, UseFormTrigger } from "react-hook-form";
import type { ResumeData } from "./resume-form.interface";

export interface UseStepperItemArgs {
  control: Control<ResumeData>;
  stepKey: AdditionalArea;
  index: number;
  trigger: UseFormTrigger<ResumeData>;
}
