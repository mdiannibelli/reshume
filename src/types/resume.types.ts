export interface PersonalInfo {
  nombre: string;
  apellido: string;
  tituloProfesional: string;
  correo: string;
  telefono: string;
  pais: string;
  ciudad: string;
  sitioWeb?: string;
  linkedin?: string;
  github?: string;
  resumenProfesional: string;
}

export interface Education {
  id: string;
  institucion: string;
  titulo: string;
  fechaInicio: string;
  fechaFin?: string;
  enCurso: boolean;
  descripcion?: string;
}

export interface Experience {
  id: string;
  empresa: string;
  puesto: string;
  fechaInicio: string;
  fechaFin?: string;
  enCurso: boolean;
  descripcion: string;
  logros?: string[];
}

export interface Skill {
  id: string;
  nombre: string;
  nivel: "basico" | "intermedio" | "avanzado" | "experto";
  categoria: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  educacion: Education[];
  experiencia: Experience[];
  habilidades: Skill[];
}
