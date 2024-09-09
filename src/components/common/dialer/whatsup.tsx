"use client";
import { useTranslations } from "next-intl";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function WhatsupDialerItem() {
  const t = useTranslations("common");
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/972545566786"
    >
      <WhatsAppIcon />
    </a>
  );
}
