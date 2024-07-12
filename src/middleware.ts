import { locales } from "@app/navigation";
import createMiddleware from "next-intl/middleware";
export default createMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    `/(en|he)/:path*`,
  ],
};
