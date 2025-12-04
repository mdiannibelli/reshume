import z from "zod";
import { minLengthField } from "@/helpers";
export const resumeSchema = z.object({
  personalInfo: z.object({
    name: minLengthField(3),
    lastName: minLengthField(3),
    professionalTitle: minLengthField(3),
    email: z
      .string()
      .email("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.ERRORS.INVALID"),
    phone: minLengthField(9),
    country: minLengthField(3),
    city: minLengthField(3),
    website: z
      .string()
      .url("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    linkedin: z
      .string()
      .url("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    github: z
      .string()
      .url("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    behance: z
      .string()
      .url("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.ERRORS.INVALID_URL")
      .optional()
      .or(z.literal("")),
    professionalSummary: minLengthField(50),
  }),
  education: z.array(
    z.object({
      id: z.string(),
      institution: z
        .string()
        .min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
      title: z.string().min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
      startDate: z
        .string()
        .min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
      endDate: z.string().optional(),
      inProgress: z.boolean(),
      description: z.string().optional(),
    })
  ),
  experience: z.array(
    z.object({
      id: z.string(),
      company: z.string().min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
      position: z.string().min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
      startDate: z
        .string()
        .min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
      endDate: z.string().optional(),
      inProgress: z.boolean(),
      description: z
        .string()
        .min(20, "La descripción debe tener al menos 20 caracteres"),
      achievements: z.array(z.string()).optional(),
    })
  ),
  skills: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
      level: z.enum(["basic", "intermediate", "advanced", "expert"]),
      category: z.string().min(1, "GENERATE_RESUME.FORM_STEPS.ERRORS.REQUIRED"),
    })
  ),
});
