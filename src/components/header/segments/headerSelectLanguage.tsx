import { Dropdown } from "flowbite-react";
import { useLocale, useTranslations } from "next-intl";

export default function HeaderSelectLanguage() {
  const locale = useLocale();
  const t = useTranslations("common");
  const currentLanguage = t(`languages.${locale}`);
  const placeHolder = t("languages.placeHolder", {
    selectLanguage: currentLanguage,
  });
  return (
    <Dropdown label={placeHolder} inline>
      <Dropdown.Item>{t("languages.en")}</Dropdown.Item>
      <Dropdown.Item>{t("languages.he")}</Dropdown.Item>
    </Dropdown>
  );
}
