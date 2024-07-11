'use client'
import { Pages } from "@app/lib/types";
import { HeaderGuestBar } from "./segments/headerGuestBar";
import { usePathname } from "next/navigation";
import { determinePage } from "@app/lib/utils";
export function HeaderBar() {
  const pathname = usePathname();
  return <HeaderGuestBar activePage={determinePage(pathname)} />;
}
