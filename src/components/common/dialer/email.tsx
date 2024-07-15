"use client";
import { useTranslations } from "next-intl";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
export default function EmailDialerItem() {
  const t = useTranslations("common");
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:sivan@wolberg.pro"
    >
      <AlternateEmailIcon />
    </a>
  );
}
