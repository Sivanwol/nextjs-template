"use client";
import { Navbar, NavbarLink } from "flowbite-react";
import HeaderBrand from "./headerBrand";
import { useTranslations } from "next-intl";
import HeaderSelectLanguage from "./headerSelectLanguage";

export default function HeaderNavBar() {
  const t = useTranslations("common");
  return (
    <>
      <Navbar fluid rounded>
        <HeaderBrand />
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavbarLink href="#services">{t("menu.myServices")}</NavbarLink>
          <NavbarLink href="#">{t("menu.myCV")}</NavbarLink>
          <NavbarLink href="#work">{t("menu.mywork")}</NavbarLink>
          <NavbarLink href="#contact">{t("menu.contact")}</NavbarLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
