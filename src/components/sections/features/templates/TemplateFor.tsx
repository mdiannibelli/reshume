import { IoCheckmarkSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export function TemplateFor({ templateName }: { templateName: string }) {
  const { t } = useTranslation();
  const template = templateName.toUpperCase();
  const mappedRoles = Array.from({ length: 3 }).map((_, index) =>
    t(
      `HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.${template}.FOR.${
        index + 1
      }`
    )
  );
  return (
    <div>
      <h2 className="mt-8 text-xl font-medium tracking-tight text-(--text-primary)">
        {t("HOME.FEATURES.PROFESSIONAL_TEMPLATES.RECOMMENDED")}
      </h2>
      <ul className="text-(--text-primary) mt-4 flex flex-col gap-2">
        {mappedRoles.map((role, index) => (
          <li key={index} className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-lg text-(--primary)" />
            <span>{role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
