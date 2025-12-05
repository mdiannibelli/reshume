import type { TFunction } from "i18next";

export interface GetFormError {
  t: TFunction;
  error: { message?: string };
  fieldKey: string;
  minLength?: number;
  stepKey: string;
}
