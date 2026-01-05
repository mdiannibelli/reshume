import { StepWrapper } from "@/components";
import { AVAILABLE_LANGUAGES } from "@/constants";
import { LanguagesCodeEnum, StepKeysEnum } from "@/enums";
import { useFormStore } from "@/hooks";
import type { ResumeData } from "@/interfaces";
import { cn } from "@/lib/utils";
import { getErrorMessage } from "@/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IoWarningOutline } from "react-icons/io5";

export function ConfigurationStep() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<ResumeData>();

  const { t } = useTranslation();
  const {
    updateSelectedCvLanguage,
    updateWantIcons,
    updateClearFieldsAfterGeneration,
    formData,
  } = useFormStore();

  const [isLanguageSelected, setIsLanguageSelected] = useState(() => {
    return (
      formData.selectedCvLanguage === LanguagesCodeEnum.ENGLISH ||
      formData.selectedCvLanguage === LanguagesCodeEnum.SPANISH
    );
  });
  const [saveMode, setSaveMode] = useState(() => {
    return formData.clearFieldsAfterGeneration ?? false;
  });

  const handleLanguage = (value: LanguagesCodeEnum) => {
    updateSelectedCvLanguage(value);
    setIsLanguageSelected(true);
  };

  const handleWantIcons = (value: boolean) => {
    updateWantIcons(value);
  };

  const handleClearFieldsAfterGeneration = (value: boolean) => {
    updateClearFieldsAfterGeneration(value);
    setValue("clearFieldsAfterGeneration", value);
    setSaveMode(value);
  };

  return (
    <StepWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-y-6">
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-3">
              {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.LANGUAGE")}{" "}
              <span className="text-(--primary)">*</span>
            </label>
            <select
              {...register("selectedCvLanguage")}
              onChange={(e) =>
                handleLanguage(e.target.value as LanguagesCodeEnum)
              }
              defaultValue=""
              className="w-full p-6 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-1 focus:ring-(--primary) focus:border-transparent transition-all"
            >
              <option value="">
                {t(
                  "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.LANGUAGE_PLACEHOLDER"
                )}
              </option>
              {AVAILABLE_LANGUAGES.map((language) => (
                <option key={language.value} value={language.value}>
                  {t(language.labelFull)}
                </option>
              ))}
            </select>
            {errors.selectedCvLanguage && (
              <p className="mt-3 ml-1 text-sm text-(--primary)">
                {getErrorMessage({
                  t,
                  error: errors.selectedCvLanguage,
                  fieldKey: "LANGUAGE",
                  stepKey: StepKeysEnum.CONFIGURATION,
                })}
              </p>
            )}

            {isLanguageSelected && (
              <div className="p-6 border-(--primary) border bg-(--primary)/10 text-(--text-primary) rounded-xl flex flex-col md:flex-row gap-3 items-center mt-8">
                <IoWarningOutline className="hidden md:block text-4xl" />
                <p className="text-sm">
                  {t(
                    "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.LANGUAGE_DESCRIPTION"
                  )}
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-3">
              {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.WANT_ICONS")}
            </label>
            <select
              {...register("wantIcons", {
                setValueAs: (value) => value === "true" || value === true,
              })}
              onChange={(e) => {
                const boolValue = e.target.value === "true";
                handleWantIcons(boolValue);
                register("wantIcons").onChange({
                  target: { value: boolValue, name: "wantIcons" },
                });
              }}
              defaultValue="false"
              className="w-full p-6 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-1 focus:ring-(--primary) focus:border-transparent transition-all"
            >
              <option value="true">
                {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.YES")}
              </option>
              <option value="false">
                {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.NO")}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-3">
              {t(
                "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.CLEAR_FIELDS_AFTER_GENERATION"
              )}{" "}
            </label>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => handleClearFieldsAfterGeneration(true)}
                className={cn(
                  "cursor-pointer w-full px-6 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-1 focus:ring-(--primary) focus:border-transparent transition-all",
                  saveMode ? "bg-(--primary)" : "bg-(--background-secondary)"
                )}
              >
                {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.YES")}
              </button>
              <button
                type="button"
                onClick={() => handleClearFieldsAfterGeneration(false)}
                className={cn(
                  "cursor-pointer w-full px-6 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-1 focus:ring-(--primary) focus:border-transparent transition-all",
                  saveMode ? "bg-(--background-secondary)" : "bg-(--primary)"
                )}
              >
                {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.NO")}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </StepWrapper>
  );
}
