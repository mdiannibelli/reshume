import { useTranslation } from "react-i18next";
import { TEMPLATES } from "@/constants";

export function TemplatePrice({ templateName }: { templateName: string }) {
  const { t } = useTranslation();
  const template = TEMPLATES.find((template) => template.tag === templateName);
  const color = template?.decorator?.color;
  const bgGradient =
    color === "bg-(--success)"
      ? "bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#059669_50%,#10b981_100%)]"
      : "bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#b91c1c_50%,#ef4444_100%)]";
  return (
    <div className="absolute right-0 top-0 m-4 flex justify-end">
      <div>
        <button className="relative inline-flex overflow-hidden rounded-full p-[2px]">
          <span
            className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${bgGradient}`}
          />
          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-(--text-primary) backdrop-blur-3xl bg-transparent`}
          >
            {t(
              `HOME.FEATURES.PROFESSIONAL_TEMPLATES.TEMPLATES.${templateName.toUpperCase()}.PRICE`
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
