export * from "@app/lib/auth";
export * from "@app/middlewares/i18n-handler";
export { rateLimitMiddleware as rateLimit } from "@app/middlewares/rate-limiter-handler";
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
