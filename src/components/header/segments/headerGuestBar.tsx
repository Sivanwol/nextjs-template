"use client";
import { Navbar, NavbarLink } from "flowbite-react";
import { HeaderBrand } from "../common/headerBrand";
import { useTranslations } from "next-intl";

export function HeaderGuestBar() {
  const t = useTranslations("common");
  return (
    <Navbar fluid rounded>
      <HeaderBrand />
      <NavbarLink href="#">{t("menuGuest.joinNowClient")}</NavbarLink>
      <NavbarLink href="#">{t("menuGuest.joinNowDelivery")}</NavbarLink>
    </Navbar>
  );
}
