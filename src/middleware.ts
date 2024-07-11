import { locales } from "@app/navigation";
import createMiddleware from "next-intl/middleware";
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    "/",
    "/((?!/api|_next|favicon.ico|apple-touch-icon.png|favicon.svg|logo.svg|images|icons|manifest).*)",
    `/(en|he)/:path*`,
  ],
};
