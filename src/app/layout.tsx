import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Link, Theme } from "@radix-ui/themes";
import { AxiomWebVitals } from "next-axiom";
import Providers from "./providers";
import { FooterBar } from "@app/components/footerBar";
import { HeaderBar } from "@app/components/header/headerBar";
import useTranslation from "next-translate/useTranslation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery Platform",
  description: "Generated by Devco Solutions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang } = useTranslation("common");
  const isRTL = lang === "ar" || lang === "he";

  return (
    <Providers>
      <html dir={isRTL ? "rtl" : "ltr"}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
        </head>
        <body className={inter.className}>
          <Theme>
            <div className="bg-search_mp-bg_white flex flex-col items-center">
              <HeaderBar />
              <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
                {children}
              </main>
            </div>
            <footer>
              <FooterBar />
            </footer>
          </Theme>
          <AxiomWebVitals />
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
