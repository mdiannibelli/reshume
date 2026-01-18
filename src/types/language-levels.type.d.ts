import { LanguagesLevelEnum } from "@/enums";

export type LanguageLevel = (typeof LanguagesLevelEnum)[keyof typeof LanguagesLevelEnum];
