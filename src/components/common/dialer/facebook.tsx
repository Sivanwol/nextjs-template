"use client";
import { useTranslations } from "next-intl";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function FacebookDialerItem() {
  const t = useTranslations("common");
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/972545566786"
    >
      <FacebookIcon />
    </a>
  );
}
