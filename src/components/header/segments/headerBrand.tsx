/* eslint-disable @next/next/no-img-element */
import { NavbarBrand } from "flowbite-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function HeaderBrand() {
  const t = useTranslations("common");

  return (
    <NavbarBrand as={Link} href={process.env.NEXT_PUBLIC_API_URL}>
      <img
        src="/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt={t("header.brandAlt")}
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {t("header.brand")}
      </span>
    </NavbarBrand>
  );
}
