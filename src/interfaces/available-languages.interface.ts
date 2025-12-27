import type { LanguagesCodeEnum, LanguagesEnum } from "@/enums";

export interface AvailableLanguagesInterface {
  value: LanguagesCodeEnum;
  label: LanguagesEnum;
  labelFull: string;
  name: string;
  flag: string;
}
