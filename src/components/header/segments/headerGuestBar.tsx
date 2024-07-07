import {
  Navbar,
  NavbarLink,
} from "flowbite-react";
import { HeaderBrand } from "../common/headerBrand";
import useTranslation from 'next-translate/useTranslation'


export function HeaderGuestBar() {
  const {t} = useTranslation();
  return (
    <Navbar fluid rounded>
      <HeaderBrand />
      <NavbarLink href="#">{t('menu:guest.sign-in-as-client')}</NavbarLink>
      <NavbarLink href="#">{t('menu:guest.sign-in-as-delivery')}</NavbarLink>
    </Navbar>
  );
}