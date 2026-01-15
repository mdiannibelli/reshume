import { Selector, StepWrapper } from "@/components";
import { TEMPLATES } from "@/constants";
import { LanguagesCodeEnum, StepKeysEnum } from "@/enums";
import { useFormStore } from "@/hooks";
import type {
  ResumeData,
  SelectedTemplate,
  SelectorOption,
} from "@/interfaces";
import { cn } from "@/lib/utils";
import { getErrorMessage } from "@/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IoWarningOutline } from "react-icons/io5";
import type { TemplateStyles } from "@/interfaces";
import {
  LANGUAGE_SELECTOR_OPTIONS,
  WANT_ICONS_SELECTOR_OPTIONS,
} from "@/constants";

export function ConfigurationStep() {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext<ResumeData>();

  const { t } = useTranslation();
  const {
    updateSelectedCvLanguage,
    updateWantIcons,
    updateClearFieldsAfterGeneration,
    updateTemplate,
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

  const handleTemplate = (value: string) => {
    const template = TEMPLATES.find((template) => template.id === value);
    if (!template) {
      const emptyTemplate: SelectedTemplate = {
        id: "",
        name: "",
        description: "",
        styles: {} as TemplateStyles,
      };
      setValue("template", emptyTemplate, {
        shouldValidate: true,
        shouldTouch: true,
      });
      updateTemplate(emptyTemplate);
      trigger("template");
      return;
    }

    updateTemplate(template);
    setValue("template", template, { shouldValidate: true, shouldTouch: true });
    trigger("template");
  };

  const handleTemplateSelect = (option: SelectedTemplate | null) => {
    if (option) {
      handleTemplate(option.id);
    } else {
      handleTemplate("");
    }
  };

  const handleClearFieldsAfterGeneration = (value: boolean) => {
    updateClearFieldsAfterGeneration(value);
    setValue("clearFieldsAfterGeneration", value);
    setSaveMode(value);
  };

  const selectedLanguageOption =
    LANGUAGE_SELECTOR_OPTIONS.find(
      (opt) => opt.id === formData.selectedCvLanguage
    ) || null;

  const selectedWantIconsOption =
    WANT_ICONS_SELECTOR_OPTIONS.find(
      (opt) => opt.id === String(formData.wantIcons)
    ) || null;

  const handleLanguageSelect = (option: SelectorOption | null) => {
    if (option) {
      const languageValue = option.id as LanguagesCodeEnum;
      handleLanguage(languageValue);
      setValue("selectedCvLanguage", languageValue);
      trigger("selectedCvLanguage");
    } else {
      setValue("selectedCvLanguage", "" as LanguagesCodeEnum);
      trigger("selectedCvLanguage");
    }
  };

  const handleWantIconsSelect = (option: SelectorOption | null) => {
    if (option) {
      const boolValue = option.id === "true";
      updateWantIcons(boolValue);
      setValue("wantIcons", boolValue);
      trigger("wantIcons");
    } else {
      setValue("wantIcons", false);
      trigger("wantIcons");
    }
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
            <input type="hidden" {...register("selectedCvLanguage")} />
            <Selector
              options={LANGUAGE_SELECTOR_OPTIONS}
              selectedOption={selectedLanguageOption}
              onSelect={handleLanguageSelect}
              placeholder={t(
                "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.LANGUAGE_PLACEHOLDER"
              )}
              error={!!errors.selectedCvLanguage}
              onBlur={() => trigger("selectedCvLanguage")}
            />
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
              {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.TEMPLATE")}{" "}
              <span className="text-(--primary)">*</span>
            </label>
            <input type="hidden" {...register("template")} />
            <Selector
              options={TEMPLATES}
              selectedOption={formData.template?.id ? formData.template : null}
              onSelect={handleTemplateSelect}
              placeholder={t(
                "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.TEMPLATE_PLACEHOLDER"
              )}
              error={!!errors.template}
              onBlur={() => trigger("template")}
            />
            {errors.template && (
              <p className="mt-3 ml-1 text-sm text-(--primary)">
                {getErrorMessage({
                  t,
                  error: errors.template,
                  fieldKey: "TEMPLATE",
                  stepKey: StepKeysEnum.CONFIGURATION,
                })}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-3">
              {t("GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.WANT_ICONS")}
            </label>
            <input
              type="hidden"
              {...register("wantIcons", {
                setValueAs: (value) => value === "true" || value === true,
              })}
            />
            <Selector
              options={WANT_ICONS_SELECTOR_OPTIONS}
              selectedOption={selectedWantIconsOption}
              onSelect={handleWantIconsSelect}
              placeholder={t(
                "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.WANT_ICONS"
              )}
            />
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
