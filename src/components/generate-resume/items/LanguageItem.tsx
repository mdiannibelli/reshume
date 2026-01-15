import { AdditionalAreasEnum, LanguagesLevelEnum } from "@/enums";
import type { ResumeData } from "@/interfaces";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { LANGUAGE_LEVEL_SELECTOR_OPTIONS } from "@/constants";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Selector } from "@/components/ui/Selector";

export function LanguageItem() {
  const { t } = useTranslation();
  const { control } = useFormContext<ResumeData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: AdditionalAreasEnum.LANGUAGES,
  });

  const [languageInput, setLanguageInput] = useState("");
  const [languageLevel, setLanguageLevel] = useState<LanguagesLevelEnum>(
    LanguagesLevelEnum.NATIVE
  );

  const disabledAddLanguage =
    !languageInput.trim() || languageInput.trim().length < 3 || !languageLevel;

  const handleAddLanguage = (
    e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    if (disabledAddLanguage) return;

    const languageExists = fields.some(
      (field) => field.name.toLowerCase() === languageInput.trim().toLowerCase()
    );

    if (languageExists) return;

    append({
      name: languageInput.trim(),
      level: languageLevel,
    });

    setLanguageInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddLanguage(e as unknown as React.MouseEvent<HTMLInputElement>);
    }
  };

  const selectedLanguageLevelOption =
    LANGUAGE_LEVEL_SELECTOR_OPTIONS.find((opt) => opt.id === languageLevel) ||
    null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-semibold text-(--text-primary) mb-6">
          {t("GENERATE_RESUME.FORM_STEPS.LANGUAGES.TITLE")}
        </h3>

        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              {t("GENERATE_RESUME.FORM_STEPS.LANGUAGES.FIELDS.ADD_LANGUAGE")}{" "}
              <span className="text-(--primary)">*</span>
            </label>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all"
                type="text"
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.LANGUAGES.FIELDS.NAME_PLACEHOLDER"
                )}
                value={languageInput}
                onChange={(e) => setLanguageInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Selector
                className="px-6 py-3 lg:w-56"
                options={LANGUAGE_LEVEL_SELECTOR_OPTIONS}
                selectedOption={selectedLanguageLevelOption}
                onSelect={(option) =>
                  setLanguageLevel(option?.id as LanguagesLevelEnum)
                }
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.LANGUAGES.FIELDS.LEVEL_PLACEHOLDER"
                )}
              />
              <button
                onClick={handleAddLanguage}
                disabled={disabledAddLanguage}
                className="w-1/2 cursor-pointer px-3 py-3 bg-(--background-secondary) border border-(--primary) text-(--text-primary) rounded-lg hover:bg-(--primary)/25 duration-500 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-(--primary)"
              >
                {t("GENERATE_RESUME.FORM_STEPS.LANGUAGES.BUTTONS.ADD")}
              </button>
            </div>
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
                <span className="text-(--text-primary) text-sm">-</span>
                <span className="text-(--text-primary) text-sm">
                  {t(
                    `GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.${field.level.toUpperCase()}`
                  )}
                </span>
                <button
                  key={field.id}
                  type="button"
                  onClick={() => remove(index)}
                  className="cursor-pointer text-(--primary) hover:text-(--primary-light) transition-colors text-lg font-bold leading-none"
                  aria-label={t(
                    "GENERATE_RESUME.FORM_STEPS.LANGUAGES.BUTTONS.DELETE"
                  )}
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
