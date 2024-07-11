"use client";
import { Navbar, NavbarLink } from "flowbite-react";
import { HeaderBrand } from "./headerBrand";
import { useTranslations } from "next-intl";
import { HeaderSelectLanguage } from "./headerSelectLanguage";
import { Pages } from '@app/lib/types'

export function HeaderGuestBar({
  activePage
}: Readonly<{
  activePage: Pages;
}>) {
  const t = useTranslations("common");
  return (
    <Navbar fluid rounded>
      <HeaderBrand />
      <Navbar.Toggle />
      <Navbar.Collapse>
      <NavbarLink href="#" active={activePage === Pages.MyServices}>{t("menu.myServices")}</NavbarLink>
      <NavbarLink href="#" active={activePage === Pages.MyCv}>{t("menu.myCV")}</NavbarLink>
      <NavbarLink href="#" active={activePage === Pages.About}>{t("menu.aboutme")}</NavbarLink>
      <NavbarLink href="#" active={activePage === Pages.MyWork}>{t("menu.mywork")}</NavbarLink>
      <NavbarLink href="#" active={activePage === Pages.Contact}>{t("menu.contact")}</NavbarLink>
      </Navbar.Collapse>
      <div className="flex md:order-2 ml-3 mr-3">
      <HeaderSelectLanguage />
      </div>
    </Navbar>
  );
}
