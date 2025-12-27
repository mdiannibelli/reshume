import { useFormContext, useFieldArray } from "react-hook-form";
import type { ResumeData } from "@/interfaces";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AdditionalAreasEnum, AvailableSkillLevelsEnum } from "@/enums";

export function SkillsStep() {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<ResumeData>();
  const { t } = useTranslation();
  const { fields, append, remove } = useFieldArray({
    control,
    name: AdditionalAreasEnum.SKILLS,
  });

  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = async () => {
    if (!skillInput.trim() || skillInput.trim().length < 3) return;

    const skillExists = fields.some(
      (field) => field.name.toLowerCase() === skillInput.trim().toLowerCase()
    );

    if (skillExists) return;

    append({
      id: Date.now().toString(),
      name: skillInput.trim(),
    });

    setSkillInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-semibold text-white mb-6">
          {t("GENERATE_RESUME.FORM_STEPS.SKILLS.TITLE")}
        </h3>

        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t("GENERATE_RESUME.FORM_STEPS.SKILLS.FIELDS.ADD_SKILL")}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder={t(
                "GENERATE_RESUME.FORM_STEPS.SKILLS.FIELDS.NAME_PLACEHOLDER"
              )}
            />
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleAddSkill}
              disabled={!skillInput.trim() || skillInput.trim().length < 3}
              className="cursor-pointer px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-500"
            >
              {t("GENERATE_RESUME.FORM_STEPS.SKILLS.BUTTONS.ADD")}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {fields.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {fields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-red-500 rounded-lg"
              >
                <span className="text-white text-sm">{field.name}</span>
                <button
                  key={field.id}
                  type="button"
                  onClick={() => remove(index)}
                  className="cursor-pointer text-red-500 hover:text-red-400 transition-colors text-lg font-bold leading-none"
                  aria-label={t(
                    "GENERATE_RESUME.FORM_STEPS.SKILLS.BUTTONS.DELETE"
                  )}
                >
                  ×
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
