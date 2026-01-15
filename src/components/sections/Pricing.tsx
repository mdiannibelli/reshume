import { SectionWrapper } from "@/layouts";
import { useTranslation } from "react-i18next";
import { PricingCard } from "./pricing/PricingCard";
import { PricingVariants } from "@/enums";
import { Badge } from "@/components/ui";

export function Pricing() {
  const { t } = useTranslation();
  return (
    <SectionWrapper sectionId="pricing" resetStyles>
      <Badge text="HOME.PRICING.BADGE" />
      <div className="container mx-auto px-3 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-(--text-secondary)">
              {t("HOME.PRICING.TITLE")}
            </span>
          </h2>
          <p className="text-xl text-(--text-secondary) max-w-2xl mx-auto py-8">
            {t("HOME.PRICING.DESCRIPTION")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard
            variant={PricingVariants.STANDARD}
            plan="HOME.PRICING.CARDS.STANDARD.PLAN"
            headline="HOME.PRICING.CARDS.STANDARD.HEADLINE"
            price="HOME.PRICING.CARDS.STANDARD.PRICE"
            period="HOME.PRICING.CARDS.STANDARD.PERIOD"
            description="HOME.PRICING.CARDS.STANDARD.DESCRIPTION"
            button="HOME.PRICING.CARDS.STANDARD.BUTTON"
            checks={[
              "HOME.PRICING.CARDS.STANDARD.CHECKS.1",
              "HOME.PRICING.CARDS.STANDARD.CHECKS.2",
              "HOME.PRICING.CARDS.STANDARD.CHECKS.3",
              "HOME.PRICING.CARDS.STANDARD.CHECKS.4",
              "HOME.PRICING.CARDS.STANDARD.CHECKS.5",
              "HOME.PRICING.CARDS.STANDARD.CHECKS.6",
            ]}
          />
          <PricingCard
            variant={PricingVariants.PREMIUM}
            plan="HOME.PRICING.CARDS.PREMIUM.PLAN"
            headline="HOME.PRICING.CARDS.PREMIUM.HEADLINE"
            price="HOME.PRICING.CARDS.PREMIUM.PRICE"
            period="HOME.PRICING.CARDS.PREMIUM.PERIOD"
            description="HOME.PRICING.CARDS.PREMIUM.DESCRIPTION"
            button="HOME.PRICING.CARDS.PREMIUM.BUTTON"
            checks={[
              "HOME.PRICING.CARDS.PREMIUM.CHECKS.1",
              "HOME.PRICING.CARDS.PREMIUM.CHECKS.2",
              "HOME.PRICING.CARDS.PREMIUM.CHECKS.3",
              "HOME.PRICING.CARDS.PREMIUM.CHECKS.4",
            ]}
            status="HOME.PRICING.CARDS.PREMIUM.STATUS"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
