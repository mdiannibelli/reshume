import z from "zod";
import { minLengthField } from "@/helpers";
import { AvailableSkillLevelsEnum, LanguagesCodeEnum } from "@/enums";

export const resumeSchema = z.object({
  personalInfo: z.object({
    name: minLengthField({ minLength: 3 }),
    lastName: minLengthField({ minLength: 3 }),
    professionalTitle: minLengthField({ minLength: 3 }),
    email: z.string().email("GENERATE_RESUME.ERRORS.INVALID"),
    phone: minLengthField({ minLength: 9, mustBeNumber: true }),
    country: minLengthField({ minLength: 3 }),
    city: minLengthField({ minLength: 3 }),
    website: z
      .string()
      .url("GENERATE_RESUME.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    linkedin: z
      .string()
      .url("GENERATE_RESUME.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    github: z
      .string()
      .url("GENERATE_RESUME.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    behance: z
      .string()
      .url("GENERATE_RESUME.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    professionalSummary: minLengthField({ minLength: 50 }),
  }),
  education: z.array(
    z
      .object({
        id: z.string(),
        institution: minLengthField({ minLength: 3 }),
        title: minLengthField({ minLength: 3 }),
        startDate: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
        endDate: z.string().optional().or(z.literal("")),
        inProgress: z.boolean(),
        description: z.string().optional(),
      })
      .refine(
        (data) => {
          if (!data.inProgress) {
            return data.endDate && data.endDate.trim().length > 0;
          }
          return true;
        },
        {
          message: "GENERATE_RESUME.ERRORS.REQUIRED",
          path: ["endDate"],
        }
      )
  ),
  experience: z.array(
    z
      .object({
        id: z.string(),
        company: minLengthField({ minLength: 3 }),
        position: minLengthField({ minLength: 3 }),
        startDate: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
        endDate: z.string().optional().or(z.literal("")),
        inProgress: z.boolean(),
        description: z.string().optional(),
        achievements: z.array(z.string()).optional(),
      })
      .refine(
        (data) => {
          if (!data.inProgress) {
            return data.endDate && data.endDate.trim().length > 0;
          }
          return true;
        },
        {
          message: "GENERATE_RESUME.ERRORS.REQUIRED",
          path: ["endDate"],
        }
      )
  ),
  skills: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
    })
  ),
  language: z
    .enum(Object.values(LanguagesCodeEnum), {
      message: "GENERATE_RESUME.ERRORS.INVALID_OPTION",
    })
    .or(z.literal(""))
    .refine((val) => val !== "", {
      message: "GENERATE_RESUME.ERRORS.REQUIRED",
    }),
  wantIcons: z.boolean().optional(),
});

/* level: z.enum(Object.values(AvailableSkillLevelsEnum)), */
export type ResumeDataSchema = z.infer<typeof resumeSchema>;
