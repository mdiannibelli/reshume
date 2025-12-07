import type { StepKeysEnum } from "@/enums";
import type { TFunction } from "i18next";

export interface GetFormError {
  t: TFunction;
  error: { message?: string };
  fieldKey: string;
  minLength?: number;
  stepKey: string;
}

export interface ValidateMinLength {
  minLength: number;
  mustBeNumber?: boolean;
}

export interface ValidateEndDate {
  value: string;
  inProgress: boolean;
  stepKey: StepKeysEnum;
  t: TFunction;
}
