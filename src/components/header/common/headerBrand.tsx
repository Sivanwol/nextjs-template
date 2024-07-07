import { NavbarBrand } from "flowbite-react";

export function HeaderBrand() {
  return (
    <NavbarBrand href="https://flowbite-react.com">
      <img
        src="/favicon.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite React Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite React
      </span>
    </NavbarBrand>
  );
}
