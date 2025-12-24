import { useFormContext, useFieldArray } from "react-hook-form";
import type { ResumeData } from "@/interfaces";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS_LEVELS } from "@/constants";
import { useTranslation } from "react-i18next";
import { AdditionalAreasEnum, AvailableSkillLevelsEnum, StepKeysEnum } from "@/enums";
import { getErrorMessage } from "@/utils";

export function SkillsStep() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ResumeData>();
  const { t } = useTranslation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: AdditionalAreasEnum.SKILLS,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">{t("GENERATE_RESUME.FORM_STEPS.SKILLS.TITLE")}</h3>
        <button
          type="button"
          onClick={() =>
            append({
              id: Date.now().toString(),
              name: "",
              level: AvailableSkillLevelsEnum.BASIC,
            })
          }
          className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-medium"
        >
          {t("GENERATE_RESUME.FORM_STEPS.SKILLS.BUTTONS.ADD")}
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
            <p>{t("GENERATE_RESUME.FORM_STEPS.SKILLS.NO_SKILLS_ADDED")}</p>
          </motion.div>
        ) : (
          fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-4 mt-8 flex-col relative cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-semibold text-white">{t("GENERATE_RESUME.FORM_STEPS.SKILLS.ITEM")} {index + 1}</h4>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    {t("GENERATE_RESUME.FORM_STEPS.SKILLS.BUTTONS.DELETE")}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.SKILLS.FIELDS.NAME")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register(`skills.${index}.name`)}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder={t("GENERATE_RESUME.FORM_STEPS.SKILLS.FIELDS.NAME_PLACEHOLDER")}
                  />
                  {errors.skills?.[index]?.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {getErrorMessage({
                        t,
                        error: errors.skills[index]?.name,
                        fieldKey: "NAME",
                        stepKey: StepKeysEnum.SKILLS,
                      })}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.SKILLS.FIELDS.LEVEL")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register(`skills.${index}.level`)}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    {SKILLS_LEVELS.map((level) => (
                      <option key={level.value} value={level.value}>
                        {t(level.label)}
                      </option>
                    ))}
                  </select>
                  {errors.skills?.[index]?.level && (
                    <p className="mt-1 text-sm text-red-500">
                      {getErrorMessage({
                        t,
                        error: errors.skills[index]?.level,
                        fieldKey: "LEVEL",
                        stepKey: StepKeysEnum.SKILLS,
                      })}
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

