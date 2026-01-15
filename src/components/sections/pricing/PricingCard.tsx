import { PricingVariants } from "@/enums";
import { AiFillThunderbolt } from "react-icons/ai";
import { BiSolidShieldAlt2 } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { SiCloudflareworkers } from "react-icons/si";
import { CiCircleCheck } from "react-icons/ci";
import type { PricingCard } from "@/interfaces";

export function PricingCard(card: PricingCard) {
  const { t } = useTranslation();
  const {
    variant,
    plan,
    headline,
    price,
    period,
    description,
    button,
    checks,
    status,
  } = card;
  const colors = {
    [PricingVariants.STANDARD]: {
      mainColorText: "text-(--text-primary)",
      blurBackground: "to-(--text-primary)/35",
      iconGradient:
        "bg-(--text-primary)/10 bg-linear-to-b from-(--text-primary)/30 to-transparent",
      to: "(--text-primary)",
      background: "bg-(--background-secondary)",
      border: "border-(--border)",
      hoverBorder: "border-(--border-hover)",
      gradient:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#111114_0%,#0B0B0F_50%,#111114_100%)]",
      btnColor: "bg-(--text-primary) text-(--background-secondary)",
    },
    [PricingVariants.PREMIUM]: {
      mainColorText: "text-(--primary)",
      blurBackground: "to-(--primary)/35",
      iconGradient:
        "bg-(--primary)/10 bg-linear-to-b from-(--primary)/30 to-transparent",
      background: "bg-(--primary)/25",
      border: "border-(--primary)/25",
      hoverBorder: "border-(--primary-hover)/60",
      gradient:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#FECACA_0%,#DC2626_50%,#FECACA_100%)]",
      btnColor: "bg-(--primary) text-(--text-primary)",
    },
  };
  const {
    blurBackground,
    iconGradient,
    background,
    border,
    hoverBorder,
    gradient,
    btnColor,
    mainColorText,
  } = colors[variant];
  return (
    <div className="relative group transition-all duration-300 hover:-translate-y-1 h-[760px]">
      <div
        className={`absolute -inset-1 rounded-xl opacity-0 bg-linear-to-br from-(--text-primary)/5 ${blurBackground} blur-2xl group-hover:opacity-80 transition-all duration-500`}
      ></div>
      <div
        className={`p-8 relative overflow-hidden flex flex-col ${background} ${border} h-full z-10 transition-all duration-300 border group-hover:${hoverBorder} rounded-2xl`}
      >
        <div>
          <div>
            <div className="flex gap-4 items-center relative">
              <div className={`rounded p-2 ${iconGradient}`}>
                {variant === PricingVariants.STANDARD ? (
                  <BiSolidShieldAlt2 className="text-2xl text-(--text-primary) shadow-2xl" />
                ) : (
                  <AiFillThunderbolt className="text-2xl text-(--primary) shadow-2xl" />
                )}
              </div>
              <h3 className="text-2xl mb-1 text-(--text-primary) font-bold">
                {t(plan)}
              </h3>
            </div>
            <p className="text-base text-(--text-primary) mt-4">
              {t(headline)}
            </p>
          </div>
          <div className="mt-6">
            <h2 className="flex items-end">
              <span className="text-6xl font-medium text-(--text-primary)">
                {t(price)}
              </span>
              <span className="text-2xl font-medium text-(--text-secondary)">
                {t(period)}
              </span>
            </h2>
            <p className="text-base text-(--text-secondary) mt-6 max-w-md">
              {t(description)}
            </p>
            <div className="mt-6 w-full flex justify-center">
              <button className="relative inline-flex overflow-hidden rounded-lg p-[2px] w-full">
                <span
                  className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${gradient}`}
                />
                <a
                  href="/generate-resume"
                  className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-6 py-4 ${btnColor} text-xl font-medium`}
                >
                  {t(button)}
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="relative my-8 flex items-center">
          <div className="flex-1 h-px bg-(--text-secondary)/10"></div>
          <div className="px-4">
            <SiCloudflareworkers className="text-2xl text-(--text-secondary)/10" />
          </div>
          <div className="flex-1 h-px bg-(--text-secondary)/10"></div>
        </div>

        <div>
          <ul className="flex flex-col gap-4">
            {checks.map((check) => (
              <li className="flex items-center gap-4">
                <CiCircleCheck className={`text-2xl ${mainColorText}`} />
                <span className="text-base text-(--text-primary) mb-1">
                  {t(check)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {status && (
          <span className={`${mainColorText} block text-center mt-8`}>
            {t(status)}
          </span>
        )}
      </div>
    </div>
  );
}
