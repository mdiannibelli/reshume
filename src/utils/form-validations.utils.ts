import type { GetFormError } from "@/interfaces";

export function getErrorMessage({
  t,
  error,
  fieldKey,
  minLength,
  stepKey,
}: GetFormError) {
  if (!error?.message) return "";
  const fieldName = t(
    `GENERATE_RESUME.FORM_STEPS.${stepKey}.FIELDS.${fieldKey}`
  );

  if (error.message.includes("MIN_LENGTH")) {
    return t("GENERATE_RESUME.ERRORS.MIN_LENGTH", {
      field: fieldName,
      length: minLength,
    });
  }

  return t(error.message, { field: fieldName });
}
