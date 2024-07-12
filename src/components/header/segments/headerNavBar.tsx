import { Navbar, NavbarLink } from "flowbite-react";
import { HeaderBrand } from "./headerBrand";
import { useTranslations } from "next-intl";
import { HeaderSelectLanguage } from "./headerSelectLanguage";

export function HeaderNavBar() {
  const t = useTranslations("common");
  return (
    <>
      <Navbar fluid rounded>
        <HeaderBrand />
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavbarLink href="#">{t("menu.myServices")}</NavbarLink>
          <NavbarLink href="#">{t("menu.myCV")}</NavbarLink>
          <NavbarLink href="#">{t("menu.aboutme")}</NavbarLink>
          <NavbarLink href="#">{t("menu.mywork")}</NavbarLink>
          <NavbarLink href="#">{t("menu.contact")}</NavbarLink>
          <div className="flex md:order-2 ml-3 mr-3">
            <HeaderSelectLanguage />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
