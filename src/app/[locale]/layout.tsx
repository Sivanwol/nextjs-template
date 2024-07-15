import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@app/lib/providers";
import { FooterBar } from "@app/components/footerBar";
import HeaderBar from "@app/components/header/headerBar";
import { CustomFlowbiteTheme, Flowbite, ThemeModeScript } from "flowbite-react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import FadeInTransition from "@app/components/effects/transitions/fade-in";
import { locales } from "@app/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevCo Solutions Services",
  description: "Generated by Devco Solutions",
};
const customTheme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "w-full rounded-lg bg-gray-50 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    },
  },
};
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  let selectLocale = locale;
  let defaultLocale = "en";
  if (!locales.includes(params.locale)) selectLocale = defaultLocale;
  const isRTL = selectLocale === "he";
  const messages = useMessages();
  return (
    <Providers>
      <NextIntlClientProvider locale={selectLocale} messages={messages}>
        <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
          </head>
          <body className={inter.className + "bg-gray-50  dark:bg-gray-800"}>
            <Flowbite theme={{ theme: customTheme }}>
              <FadeInTransition>
                <div className="w-full h-full bg-gray-50 flex flex-col items-center">
                  <HeaderBar />
                  <main className="flex min-h-fit w-full flex-col items-center justify-center py-2">
                    {children}
                  </main>
                </div>
                <FooterBar />
              </FadeInTransition>
            </Flowbite>
            <Analytics />
            <ThemeModeScript />
          </body>
        </html>
      </NextIntlClientProvider>
    </Providers>
  );
}
