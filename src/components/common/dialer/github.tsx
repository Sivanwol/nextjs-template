"use client";
import { useTranslations } from "next-intl";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function GithubDialerItem() {
  const t = useTranslations("common");
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Sivanwol"
    >
      <GitHubIcon />
    </a>
  );
}
