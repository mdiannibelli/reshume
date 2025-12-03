import { useFormContext, useFieldArray } from "react-hook-form";
import type { ResumeData } from "@/types/resume.types";
import { motion, AnimatePresence } from "motion/react";

export function EducationStep() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educacion",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Educación</h3>
        <button
          type="button"
          onClick={() =>
            append({
              id: Date.now().toString(),
              institucion: "",
              titulo: "",
              fechaInicio: "",
              fechaFin: "",
              enCurso: false,
              descripcion: "",
            })
          }
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-medium"
        >
          + Agregar Educación
        </button>
      </div>

      <AnimatePresence>
        {fields.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12 text-gray-500"
          >
            <p>No hay educación agregada. Haz clic en "Agregar Educación" para comenzar.</p>
          </motion.div>
        ) : (
          fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 bg-gray-900 border border-gray-800 rounded-lg space-y-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-semibold text-white">Educación #{index + 1}</h4>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    Eliminar
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Institución */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Institución <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register(`educacion.${index}.institucion`, {
                      required: "La institución es requerida",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Universidad de Harvard"
                  />
                  {errors.educacion?.[index]?.institucion && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.educacion[index]?.institucion?.message}
                    </p>
                  )}
                </div>

                {/* Título */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Título o Grado <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register(`educacion.${index}.titulo`, {
                      required: "El título es requerido",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Licenciatura en Ciencias de la Computación"
                  />
                  {errors.educacion?.[index]?.titulo && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.educacion[index]?.titulo?.message}
                    </p>
                  )}
                </div>

                {/* Fecha Inicio */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fecha de Inicio <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="month"
                    {...register(`educacion.${index}.fechaInicio`, {
                      required: "La fecha de inicio es requerida",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  {errors.educacion?.[index]?.fechaInicio && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.educacion[index]?.fechaInicio?.message}
                    </p>
                  )}
                </div>

                {/* Fecha Fin */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fecha de Fin
                  </label>
                  <input
                    type="month"
                    {...register(`educacion.${index}.fechaFin`)}
                    disabled={field.enCurso}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* En Curso */}
                <div className="md:col-span-2 flex items-center">
                  <input
                    type="checkbox"
                    {...register(`educacion.${index}.enCurso`)}
                    className="w-4 h-4 text-blue-500 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-300">
                    Actualmente estudiando
                  </label>
                </div>

                {/* Descripción */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Descripción (opcional)
                  </label>
                  <textarea
                    {...register(`educacion.${index}.descripcion`)}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Logros académicos, cursos relevantes, GPA, etc."
                  />
                </div>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}

