import type { PricingVariants } from "@/enums";

export interface PricingCard {
  variant: PricingVariants;
  plan: string;
  headline: string;
  price: string;
  period: string;
  description: string;
  button: string;
  checks: string[];
  status?: string;
}
