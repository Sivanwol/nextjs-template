/* eslint-disable @next/next/no-img-element */
import { NavbarBrand } from "flowbite-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import logoIcon from "@public/logo.svg";

export default function HeaderBrand() {
  const t = useTranslations("common");

  return (
    <NavbarBrand as={Link} href={process.env.NEXT_PUBLIC_API_URL || ""}>
      <Image
        priority
        src={logoIcon}
        className="mr-3 h-16 sm:h-19 w-[120] sm:w-[100] object-cover"
        alt={t("header.brandAlt")}
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3 pr-3">
        {t("header.brand")}
      </span>
    </NavbarBrand>
  );
}
