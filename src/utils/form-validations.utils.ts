import type { GetFormError } from "@/interfaces";

export function getErrorMessage({
  t,
  error,
  fieldKey,
  minLength,
}: GetFormError) {
  if (!error?.message) return "";
  const fieldName = t(
    `GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.${fieldKey}`
  );

  if (error.message.includes("MIN_LENGTH")) {
    return t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.ERRORS.MIN_LENGTH", {
      field: fieldName,
      length: minLength,
    });
  }

  return t(error.message, { field: fieldName });
}
