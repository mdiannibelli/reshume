import z from "zod";
import { minLengthField } from "@/helpers";
import { AvailableSkillLevelsEnum } from "@/enums";
export const resumeSchema = z.object({
  personalInfo: z.object({
    name: minLengthField(3),
    lastName: minLengthField(3),
    professionalTitle: minLengthField(3),
    email: z.string().email("GENERATE_RESUME.ERRORS.INVALID"),
    phone: minLengthField(9, true),
    country: minLengthField(3),
    city: minLengthField(3),
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
    professionalSummary: minLengthField(50),
  }),
  education: z.array(
    z
      .object({
        id: z.string(),
        institution: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
        title: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
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
    z.object({
      id: z.string(),
      company: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
      position: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
      startDate: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
      endDate: z.string().optional(),
      inProgress: z.boolean(),
      description: z.string().min(20, "GENERATE.RESUME.ERRORS.MIN_LENGTH"),
      achievements: z.array(z.string()).optional(),
    })
  ),
  skills: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
      level: z.enum(Object.values(AvailableSkillLevelsEnum)),
      category: z.string().min(1, "GENERATE_RESUME.ERRORS.REQUIRED"),
    })
  ),
});
