import { LanguagesCodeEnum } from "@/enums";
import type { SelectorOption } from "@/interfaces";
import { LanguagesLevelEnum } from "@/enums";

export const WANT_ICONS_SELECTOR_OPTIONS: SelectorOption[] = [
  {
    id: "true",
    name: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.YES",
    description:
      "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.YES_DESCRIPTION",
  },
  {
    id: "false",
    name: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.NO",
    description:
      "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.NO_DESCRIPTION",
  },
];

export const LANGUAGE_SELECTOR_OPTIONS: SelectorOption[] = [
  {
    id: LanguagesCodeEnum.ENGLISH,
    name: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.en",
  },
  {
    id: LanguagesCodeEnum.SPANISH,
    name: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.es",
  },
];

export const LANGUAGE_LEVEL_SELECTOR_OPTIONS: SelectorOption[] = [
  {
    id: LanguagesLevelEnum.NATIVE,
    name: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.NATIVE",
    description:
      "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.NATIVE_DESCRIPTION",
  },
  {
    id: LanguagesLevelEnum.B1,
    name: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.B1",
    description: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.B1_DESCRIPTION",
  },
  {
    id: LanguagesLevelEnum.B2,
    name: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.B2",
    description: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.B2_DESCRIPTION",
  },
  {
    id: LanguagesLevelEnum.C1,
    name: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.C1",
    description: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.C1_DESCRIPTION",
  },
  {
    id: LanguagesLevelEnum.C2,
    name: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.C2",
    description: "GENERATE_RESUME.FORM_STEPS.LANGUAGES.LEVELS.C2_DESCRIPTION",
  },
];
