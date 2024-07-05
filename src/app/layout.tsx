import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Link, Theme } from "@radix-ui/themes";
import HeaderBar from "@app/components/headerBar";
import { AxiomWebVitals } from "next-axiom";
import { UserProvider } from "@app/lib/state/providers/user-store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className={inter.className}>
        <Theme>
          <div className="bg-search_mp-bg_white flex flex-col items-center">
            <div
              className="flex items-center justify-between w-full px-5 transition-all duration-200 bg-violet-800"
              style={{
                paddingTop: "22px",
                paddingBottom: "22px",
                height: "44px",
              }}
            >
              <div id="lColumn" className="text-white hover:text-indigo-200">
                By Sivan Wolberg
              </div>
              <div
                id="rColumn"
                className="flex items-center gap-10 overflow-hidden text-sm font-semibold transition-all duration-200"
                style={{ height: " 20px" }}
              >
                <Link
                  className="text-white hover:text-indigo-200 cursor-pointer"
                  href="/users"
                >
                  User List
                </Link>
                <Link
                  className="text-white hover:text-indigo-200 cursor-pointer"
                  href="/users/history"
                >
                  History
                </Link>
                <a
                  href="https://github.com/Sivanwol/core-micro-fw"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-indigo-200 cursor-pointer"
                >
                  My Github
                </a>
              </div>
            </div>
            <div className="w-full max-w-[1600px] pt-6 pb-36 lg:pb-10">
              <UserProvider>{children}</UserProvider>
            </div>
          </div>
        </Theme>
        <AxiomWebVitals />
      </body>
    </html>
  );
}
