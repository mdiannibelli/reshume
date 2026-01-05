import { StickyBanner } from "@/shared/components";
import { Trans, useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa6";
export function TopBanner() {
  const { t } = useTranslation();
  return (
    <StickyBanner className="absolute hidden lg:flex bg-linear-to-b from-(--primary-dark) to-(--primary-darker)">
      <p className="mx-0 max-w-[90%] text-(--text-primary) drop-shadow-md flex items-center gap-x-2">
        <FaStar className="text-(--yellow)" />
        <Trans
          i18nKey="NAVBAR.TOP_BANNER.ANNOUNCEMENT"
          components={{ bold: <span className="font-bold" /> }}
        />
        <a
          href="/about"
          className="transition duration-200 hover:underline text-(--text-primary)"
        >
          {t("NAVBAR.TOP_BANNER.READ_ANNOUNCEMENT")}
        </a>
      </p>
    </StickyBanner>
  );
}
