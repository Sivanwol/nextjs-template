"use client";
import { HeaderNavBar } from "./segments/headerNavBar";
import { usePathname } from "next/navigation";
import { determinePage } from "@app/lib/utils";
export function HeaderBar() {
  const pathname = usePathname();
  return <HeaderNavBar activePage={determinePage(pathname)} />;
}
