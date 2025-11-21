import type { LanguagesCodeEnum, LanguagesEnum } from "@/enums";

export interface AvailableLanguagesInterface {
  value: LanguagesCodeEnum;
  label: LanguagesEnum;
  name: string;
  flag: string;
}
