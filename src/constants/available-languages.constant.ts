import { LanguagesCodeEnum, LanguagesEnum } from "@/enums";
import type { AvailableLanguagesInterface } from "@/interfaces";
import enFlag from "@/assets/icons/flags/en.svg";
import esFlag from "@/assets/icons/flags/es.svg";

export const AVAILABLE_LANGUAGES: AvailableLanguagesInterface[] = [
  {
    value: LanguagesCodeEnum.ENGLISH,
    label: LanguagesEnum.ENGLISH,
    labelFull: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.en",
    name: "English",
    flag: enFlag,
  },
  {
    value: LanguagesCodeEnum.SPANISH,
    label: LanguagesEnum.SPANISH,
    labelFull: "GENERATE_RESUME.FORM_STEPS.CONFIGURATION.FIELDS.es",
    name: "Español",
    flag: esFlag,
  },
];
