import { useFormContext, useFieldArray } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import type { ResumeData } from "@/interfaces";
import { AdditionalAreasEnum } from "@/enums";
import { useTranslation } from "react-i18next";
import { EducationItem } from "../items/EducationItem";

export function EducationStep() {
  const { control } = useFormContext<ResumeData>();
  const { t } = useTranslation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: AdditionalAreasEnum.EDUCATION,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() =>
            append({
              id: Date.now().toString(),
              institution: "",
              title: "",
              startDate: "",
              endDate: "",
              inProgress: false,
              description: "",
            })
          }
          className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-medium"
        >
          {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.BUTTONS.ADD")}
        </button>
      </div>

      <AnimatePresence>
        {fields.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12 text-white/25"
          >
            <p>{t("GENERATE_RESUME.FORM_STEPS.EDUCATION.NO_EDUCATION_ADDED")}</p>
          </motion.div>
        ) : (
          fields.map((field, index) => (
            <EducationItem
              key={field.id}
              field={field}
              index={index}
              onRemove={remove}
            />
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}

