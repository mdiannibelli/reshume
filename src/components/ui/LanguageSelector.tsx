import { AVAILABLE_LANGUAGES } from "@/constants";
import { LanguagesCodeEnum, LanguagesEnum } from "@/enums";
import type { AvailableLanguagesInterface } from "@/interfaces";
import { MenuItem, Menu, HoveredLink } from "@/shared/components";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [active, setActive] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<LanguagesEnum>(() => {
    const lang = localStorage.getItem("i18nextLng");
    return lang === LanguagesCodeEnum.ENGLISH ? LanguagesEnum.ENGLISH : LanguagesEnum.SPANISH;
  });

  const changeLanguage = (language: AvailableLanguagesInterface) => {
    i18n.changeLanguage(language.value);
    setCurrentLanguage(language.label);
  };

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item={currentLanguage}>
        <div className="flex flex-col gap-y-2">
        {
          AVAILABLE_LANGUAGES.map((language) => (
            <HoveredLink key={language.value} onClick={() => changeLanguage(language)}>
              <div className="flex items-center gap-x-2">
              <img src={language.flag} alt={language.name} className="w-4 h-4" />
              <span>{language.name}</span>
              </div>
            </HoveredLink>
          ))}
        </div>
      </MenuItem>
      </Menu>
  );
}
