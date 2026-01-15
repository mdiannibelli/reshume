import { SectionWrapper } from "@/layouts";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui";
import { ContributeLayout } from "./contribute/ContributeLayout";

export function Contribute() {
  const { t } = useTranslation();
  return (
    <SectionWrapper sectionId="contribute" resetStyles>
      <Badge text="HOME.CONTRIBUTE.BADGE" />
      <div className="container mx-auto px-3 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-(--text-secondary)">
              {t("HOME.CONTRIBUTE.TITLE")}
            </span>
          </h2>
          <p className="text-xl text-(--text-secondary) max-w-2xl mx-auto py-8">
            {t("HOME.CONTRIBUTE.DESCRIPTION")}
          </p>
        </div>
        <ContributeLayout />
      </div>
    </SectionWrapper>
  );
}
