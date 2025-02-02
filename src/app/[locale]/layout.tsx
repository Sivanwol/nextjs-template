import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { AxiomWebVitals } from "next-axiom";
import Providers from "@app/lib/providers";
import { FooterBar } from "@app/components/footerBar";
import { HeaderBar } from "@app/components/header/headerBar";
import { ThemeModeScript } from "flowbite-react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import FadeInTransition from "@app/components/transitions/fade-in";
import { locales } from "@app/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery Platform",
  description: "Generated by Devco Solutions",
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
            <ThemeModeScript />
          </head>
          <body className={inter.className}>
            <Theme>
              <FadeInTransition>
                <div className="bg-search_mp-bg_white flex flex-col items-center">
                  <HeaderBar />
                  <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
                    {children}
                  </main>
                </div>
                <footer>
                  <FooterBar />
                </footer>
              </FadeInTransition>
            </Theme>
            <AxiomWebVitals />
            <Analytics />
          </body>
        </html>
      </NextIntlClientProvider>
    </Providers>
  );
}
