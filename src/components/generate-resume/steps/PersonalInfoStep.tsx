import { useFormContext } from "react-hook-form";
import type { ResumeData } from "@/types/resume.types";
import { motion } from "motion/react";

export function PersonalInfoStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ResumeData>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.nombre", { required: "El nombre es requerido" })}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Juan"
          />
          {errors.personalInfo?.nombre && (
            <p className="mt-1 text-sm text-red-500">{errors.personalInfo.nombre.message}</p>
          )}
        </div>

        {/* Apellido */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Apellido <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.apellido", { required: "El apellido es requerido" })}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Pérez"
          />
          {errors.personalInfo?.apellido && (
            <p className="mt-1 text-sm text-red-500">{errors.personalInfo.apellido.message}</p>
          )}
        </div>

        {/* Título Profesional */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Título Profesional <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.tituloProfesional", { required: "El título profesional es requerido" })}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Desarrollador Full Stack"
          />
          {errors.personalInfo?.tituloProfesional && (
            <p className="mt-1 text-sm text-red-500">{errors.personalInfo.tituloProfesional.message}</p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("personalInfo.correo", {
              required: "El correo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido",
              },
            })}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="juan.perez@email.com"
          />
          {errors.personalInfo?.correo && (
            <p className="mt-1 text-sm text-red-500">{errors.personalInfo.correo.message}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("personalInfo.telefono", { required: "El teléfono es requerido" })}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="+1 234 567 8900"
          />
          {errors.personalInfo?.telefono && (
            <p className="mt-1 text-sm text-red-500">{errors.personalInfo.telefono.message}</p>
          )}
        </div>

        {/* País */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            País <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.pais", { required: "El país es requerido" })}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Estados Unidos"
          />
          {errors.personalInfo?.pais && (
            <p className="mt-1 text-sm text-red-500">{errors.personalInfo.pais.message}</p>
          )}
        </div>

        {/* Ciudad */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Ciudad <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.ciudad", { required: "La ciudad es requerida" })}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Boston"
          />
          {errors.personalInfo?.ciudad && (
            <p className="mt-1 text-sm text-red-500">{errors.personalInfo.ciudad.message}</p>
          )}
        </div>

        {/* Sitio Web */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sitio Web
          </label>
          <input
            type="url"
            {...register("personalInfo.sitioWeb")}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="https://juanperez.com"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            LinkedIn
          </label>
          <input
            type="url"
            {...register("personalInfo.linkedin")}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="https://linkedin.com/in/juanperez"
          />
        </div>

        {/* GitHub */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            GitHub
          </label>
          <input
            type="url"
            {...register("personalInfo.github")}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="https://github.com/juanperez"
          />
        </div>
      </div>

      {/* Resumen Profesional */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Resumen Profesional <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("personalInfo.resumenProfesional", {
            required: "El resumen profesional es requerido",
            minLength: {
              value: 50,
              message: "El resumen debe tener al menos 50 caracteres",
            },
          })}
          rows={6}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          placeholder="Describe tu experiencia profesional, habilidades principales y objetivos de carrera..."
        />
        {errors.personalInfo?.resumenProfesional && (
          <p className="mt-1 text-sm text-red-500">{errors.personalInfo.resumenProfesional.message}</p>
        )}
      </div>
    </motion.div>
  );
}

