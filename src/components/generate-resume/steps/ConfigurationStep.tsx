import { AVAILABLE_LANGUAGES } from "@/constants";
import { LanguagesCodeEnum, StepKeysEnum } from "@/enums";
import { useFormStore } from "@/hooks";
import type { ResumeData } from "@/interfaces";
import { getErrorMessage } from "@/utils";
import { motion } from "motion/react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export function ConfigurationStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ResumeData>();

  const { t } = useTranslation();
  const { updateLanguage, updateWantIcons } = useFormStore();

  const handleLanguage = (value: LanguagesCodeEnum) => {
    updateLanguage(value);
  };

  const handleWantIcons = (value: boolean) => {
    console.log(value);
    updateWantIcons(value);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.LANGUAGE")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            {...register("language")}
            onChange={(e) =>
              handleLanguage(e.target.value as LanguagesCodeEnum)
            }
            defaultValue=""
            className="w-full p-6 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
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
          {errors.language && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.language,
                fieldKey: "LANGUAGE",
                stepKey: StepKeysEnum.CONFIGURATION,
              })}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.WANT_ICONS")}{" "}
            <span className="text-red-500">*</span>
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
            className="w-full p-6 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
          >
            <option value="true">
              {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.YES")}
            </option>
            <option value="false">
              {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.NO")}
            </option>
          </select>
          {errors.wantIcons && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.wantIcons,
                fieldKey: "WANT_ICONS",
                stepKey: StepKeysEnum.CONFIGURATION,
              })}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
