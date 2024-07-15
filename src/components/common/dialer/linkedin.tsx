"use client";
import { useTranslations } from "next-intl";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function LinkedinDialerItem() {
  const t = useTranslations("common");
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/swolberg/"
    >
      <LinkedInIcon />
    </a>
  );
}
