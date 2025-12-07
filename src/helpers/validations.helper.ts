import type { ValidateEndDate, ValidateMinLength } from "@/interfaces";
import z from "zod";

export function minLengthField(args: ValidateMinLength) {
  const { minLength, mustBeNumber } = args;
  return z.string().superRefine((val, ctx) => {
    if (val.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "GENERATE_RESUME.ERRORS.REQUIRED",
      });
    } else if (mustBeNumber) {
      if (!val.startsWith("+")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "GENERATE_RESUME.ERRORS.INVALID_NUMBER",
        });
        return;
      }

      const restOfNumber = val.slice(1);
      const phoneRegex = /^[\d\s-]+$/;

      if (!phoneRegex.test(restOfNumber)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "GENERATE_RESUME.ERRORS.INVALID_NUMBER",
        });
        return;
      }

      const numbersOnly = restOfNumber.replace(/[\s-]/g, "");
      if (numbersOnly.length < minLength) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "GENERATE_RESUME.ERRORS.MIN_LENGTH",
        });
      }
    } else if (val.length < minLength) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "GENERATE_RESUME.ERRORS.MIN_LENGTH",
      });
    }
  });
}

export function validateEndDate(args: ValidateEndDate) {
  const { value, inProgress, stepKey, t } = args;
  if (!inProgress) {
    if (!value || value.trim().length === 0) {
      return t(`GENERATE_RESUME.FORM_STEPS.${stepKey}.ERRORS.REQUIRED`, {
        field: t(`GENERATE_RESUME.FORM_STEPS.${stepKey}.FIELDS.END_DATE`),
      });
    }
  }
  return true;
}
