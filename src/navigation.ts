import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "he"];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
