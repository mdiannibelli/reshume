import { useFormContext, useFieldArray } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import type { ResumeData } from "@/interfaces";
import { AdditionalAreasEnum } from "@/enums";
import { useTranslation } from "react-i18next";
import { ExperienceItem } from "../items/ExperienceItem";
import { StepWrapper } from "@/components";

export function ExperienceStep() {
  const { control } = useFormContext<ResumeData>();
  const { t } = useTranslation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: AdditionalAreasEnum.EXPERIENCE,
  });

  return (
    <StepWrapper borderDisabled>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Add experience"
            onClick={() =>
              append({
                id: Date.now().toString(),
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                inProgress: false,
                description: "",
                achievements: [],
              })
            }
            className="px-4 py-2 cursor-pointer bg-(--background-secondary) border border-(--primary) text-(--text-primary) rounded-lg hover:bg-(--primary)/25 duration-500 transition-all font-medium"
          >
            {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.BUTTONS.ADD")}
          </button>
        </div>

        <AnimatePresence>
          {fields.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 text-(--text-secondary)"
            >
              <p>
                {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.NO_EXPERIENCE_ADDED")}
              </p>
            </motion.div>
          ) : (
            fields.map((field, index) => (
              <ExperienceItem
                key={field.id}
                field={field}
                index={index}
                onRemove={remove}
              />
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </StepWrapper>
  );
}
