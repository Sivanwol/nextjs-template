import type { Metadata } from "next";
import Providers from "@app/lib/providers";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "DevCo Solutions Services",
  description: "Generated by Devco Solutions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add your custom root layout code here
  return (
    <Providers>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <ThemeModeScript />
      </head>
      <body className={inter.className}>{children}</body>
    </Providers>
  );
}
