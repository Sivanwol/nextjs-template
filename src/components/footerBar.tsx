"use client";
import { Footer, FooterCopyright } from "flowbite-react";
import { useTranslations } from "next-intl";

export function FooterBar() {
  const t = useTranslations("footer");
  return (
    <Footer container style={{ borderBottom: "0px none" }}>
      <div className="w-full text-center">
        <div className="w-full justify-between md:flex md:items-center md:justify-between">
          <FooterCopyright href="#" by={t("siteName")} year={2024} />
          <Footer.LinkGroup>
            <Footer.Link href="#">{t("about")}</Footer.Link>
            <Footer.Link href="#">{t("privacy")}</Footer.Link>
            <Footer.Link href="#">{t("cookie")}</Footer.Link>
            <Footer.Link href="#">{t("contact")}</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by={t("credit")} year={2024} />
      </div>
    </Footer>
  );
}
