import { LanguagesCodeEnum, LanguagesEnum } from "@/enums";
import type { AvailableLanguagesInterface } from "@/interfaces/available-languages.interface";

export const AVAILABLE_LANGUAGES: AvailableLanguagesInterface[] = [
  {
    value: LanguagesCodeEnum.ENGLISH,
    label: LanguagesEnum.ENGLISH,
    labelFull: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.en",
    name: "English",
    flag: "./src/assets/icons/flags/en.svg",
  },
  {
    value: LanguagesCodeEnum.SPANISH,
    label: LanguagesEnum.SPANISH,
    labelFull: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.es",
    name: "Español",
    flag: "./src/assets/icons/flags/es.svg",
  },
];
