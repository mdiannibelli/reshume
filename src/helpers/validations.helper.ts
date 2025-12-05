import z from "zod";

export function minLengthField(minLength: number) {
  return z.string().superRefine((val, ctx) => {
    if (val.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "GENERATE_RESUME.ERRORS.REQUIRED",
      });
    } else if (val.length < minLength) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "GENERATE_RESUME.ERRORS.MIN_LENGTH",
      });
    }
  });
}
