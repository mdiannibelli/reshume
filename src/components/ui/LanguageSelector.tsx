import { AVAILABLE_LANGUAGES } from "@/constants";
import type { LanguagesEnum } from "@/enums";
import type { AvailableLanguagesInterface } from "@/interfaces";
import { MenuItem, Menu, HoveredLink } from "@/shared/components";
import { getLanguageEnum } from "@/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [active, setActive] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<LanguagesEnum>(() => {
    const lang = localStorage.getItem("i18nextLng") || i18n.language;
    return getLanguageEnum(lang);
  });

  const changeLanguage = (language: AvailableLanguagesInterface) => {
    i18n.changeLanguage(language.value);
    setCurrentLanguage(language.label);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentLanguage(getLanguageEnum(i18n.language));
  }, [i18n.language]);

  return (
    <Menu setActive={setActive} className="lg:px-8">
      <MenuItem setActive={setActive} active={active} item={currentLanguage}>
        <div className="flex flex-col gap-y-2">
          {AVAILABLE_LANGUAGES.map((language) => (
            <HoveredLink
              key={language.value}
              onClick={() => changeLanguage(language)}
            >
              <div className="flex items-center gap-x-2">
                <img
                  src={language.flag}
                  alt={language.name}
                  className="w-4 h-4"
                />
                <span>{language.name}</span>
              </div>
            </HoveredLink>
          ))}
        </div>
      </MenuItem>
    </Menu>
  );
}
