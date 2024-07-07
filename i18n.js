/**
 * @type {import('next-translate').I18nConfig}
 */
module.exports = {
  locales: ["en", "he"],
  defaultLocale: "en",
  pages: {
    "*": ["common", "menu"],
    "/": ["home", "menu"],
    "/sign-in": ["sign-in"],
  },
  logBuild: true,
};
