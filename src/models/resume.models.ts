import z from "zod";

export const resumeSchema = z.object({
  personalInfo: z.object({
    nombre: z.string().min(1, "El nombre es requerido"),
    apellido: z.string().min(1, "El apellido es requerido"),
    tituloProfesional: z.string().min(1, "El título profesional es requerido"),
    correo: z.string().email("Correo electrónico inválido"),
    telefono: z.string().min(1, "El teléfono es requerido"),
    pais: z.string().min(1, "El país es requerido"),
    ciudad: z.string().min(1, "La ciudad es requerida"),
    sitioWeb: z.string().url("URL inválida").optional().or(z.literal("")),
    linkedin: z.string().url("URL inválida").optional().or(z.literal("")),
    github: z.string().url("URL inválida").optional().or(z.literal("")),
    resumenProfesional: z
      .string()
      .min(50, "El resumen debe tener al menos 50 caracteres"),
  }),
  educacion: z.array(
    z.object({
      id: z.string(),
      institucion: z.string().min(1, "La institución es requerida"),
      titulo: z.string().min(1, "El título es requerido"),
      fechaInicio: z.string().min(1, "La fecha de inicio es requerida"),
      fechaFin: z.string().optional(),
      enCurso: z.boolean(),
      descripcion: z.string().optional(),
    })
  ),
  experiencia: z.array(
    z.object({
      id: z.string(),
      empresa: z.string().min(1, "La empresa es requerida"),
      puesto: z.string().min(1, "El puesto es requerido"),
      fechaInicio: z.string().min(1, "La fecha de inicio es requerida"),
      fechaFin: z.string().optional(),
      enCurso: z.boolean(),
      descripcion: z
        .string()
        .min(20, "La descripción debe tener al menos 20 caracteres"),
      logros: z.array(z.string()).optional(),
    })
  ),
  habilidades: z.array(
    z.object({
      id: z.string(),
      nombre: z.string().min(1, "El nombre de la habilidad es requerido"),
      nivel: z.enum(["basico", "intermedio", "avanzado", "experto"]),
      categoria: z.string().min(1, "La categoría es requerida"),
    })
  ),
});
