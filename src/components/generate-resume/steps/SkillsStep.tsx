import { useFormContext, useFieldArray } from "react-hook-form";
import type { ResumeData } from "@/types/resume.types";
import { motion, AnimatePresence } from "motion/react";

const niveles = [
  { value: "basico", label: "Básico" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
  { value: "experto", label: "Experto" },
] as const;

const categoriasComunes = [
  "Lenguajes de Programación",
  "Frameworks",
  "Bases de Datos",
  "Herramientas",
  "Cloud",
  "DevOps",
  "Diseño",
  "Idiomas",
  "Otras",
];

export function SkillsStep() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "habilidades",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Habilidades</h3>
        <button
          type="button"
          onClick={() =>
            append({
              id: Date.now().toString(),
              nombre: "",
              nivel: "intermedio",
              categoria: "",
            })
          }
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-medium"
        >
          + Agregar Habilidad
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
            <p>No hay habilidades agregadas. Haz clic en "Agregar Habilidad" para comenzar.</p>
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
                <h4 className="text-md font-semibold text-white">Habilidad #{index + 1}</h4>
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Nombre de la Habilidad */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register(`habilidades.${index}.nombre`, {
                      required: "El nombre de la habilidad es requerido",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="JavaScript"
                  />
                  {errors.habilidades?.[index]?.nombre && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.habilidades[index]?.nombre?.message}
                    </p>
                  )}
                </div>

                {/* Categoría */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Categoría <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    list={`categorias-${index}`}
                    {...register(`habilidades.${index}.categoria`, {
                      required: "La categoría es requerida",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Lenguajes de Programación"
                  />
                  <datalist id={`categorias-${index}`}>
                    {categoriasComunes.map((cat) => (
                      <option key={cat} value={cat} />
                    ))}
                  </datalist>
                  {errors.habilidades?.[index]?.categoria && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.habilidades[index]?.categoria?.message}
                    </p>
                  )}
                </div>

                {/* Nivel */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nivel <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register(`habilidades.${index}.nivel`, {
                      required: "El nivel es requerido",
                    })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {niveles.map((nivel) => (
                      <option key={nivel.value} value={nivel.value}>
                        {nivel.label}
                      </option>
                    ))}
                  </select>
                  {errors.habilidades?.[index]?.nivel && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.habilidades[index]?.nivel?.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}

