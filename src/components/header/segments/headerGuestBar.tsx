import { Navbar, NavbarLink } from "flowbite-react";
import { HeaderBrand } from "../common/headerBrand";

export function HeaderGuestBar() {
  return (
    <Navbar fluid rounded>
      <HeaderBrand />
      <NavbarLink href="#">הצתרף כבעל עסק</NavbarLink>
      <NavbarLink href="#">הצתרף כשליח</NavbarLink>
    </Navbar>
  );
}
