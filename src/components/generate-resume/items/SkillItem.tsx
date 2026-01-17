import { AdditionalAreasEnum } from "@/enums";
import type { ResumeData } from "@/interfaces";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";

export function SkillItem() {
  const { t } = useTranslation();
  const { control } = useFormContext<ResumeData>();
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
        <h3 className="text-lg font-semibold text-(--text-primary) mb-6">
          {t("GENERATE_RESUME.FORM_STEPS.SKILLS.TITLE")}
        </h3>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              {t("GENERATE_RESUME.FORM_STEPS.SKILLS.FIELDS.ADD_SKILL")}{" "}
              <span className="text-(--primary)">*</span>
            </label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all"
              placeholder={t(
                "GENERATE_RESUME.FORM_STEPS.SKILLS.FIELDS.NAME_PLACEHOLDER"
              )}
            />
          </div>
          <div className="flex items-end">
            <button
              type="button"
              aria-label="Add skill"
              onClick={handleAddSkill}
              disabled={!skillInput.trim() || skillInput.trim().length < 3}
              className="px-4 py-3 cursor-pointer bg-(--background-secondary) border border-(--primary) text-(--text-primary) rounded-lg hover:bg-(--primary)/25 duration-500 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-(--primary)"
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
                className="flex items-center gap-2 px-4 py-2 bg-(--background-secondary) border border-(--primary) rounded-lg"
              >
                <span className="text-(--text-primary) text-sm">
                  {field.name}
                </span>
                <button
                  key={field.id}
                  type="button"
                  onClick={() => remove(index)}
                  className="cursor-pointer text-(--primary) hover:text-(--primary-light) transition-colors text-lg font-bold leading-none"
                  aria-label="Delete skill"
                >
                  <RiCloseLine className="text-base" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
