import { useTranslation } from "react-i18next";

export function Badge({ text }: { text: string }) {
  const { t } = useTranslation();
  return (
    <div
      className="inline-block px-4 py-1.5 bg-(--primary-dark)/5 backdrop-blur-md rounded-full text-sm font-medium text-(--primary) border-(--primary-dark)/20 border relative overflow-hidden group mb-12"
      style={{ transform: "none" }}
    >
      <span className="relative z-10">{t(text)}</span>
      <span className="absolute inset-0 bg-(--primary-dark)/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
    </div>
  );
}
