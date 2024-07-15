import { Plus } from "lucide-react";
import { Button, Tooltip } from "flowbite-react";
import { useTranslations } from "next-intl";

export default function SpeedDial() {
  const t = useTranslations("common");
  return (
    <div data-dial-init className="fixed end-6 bottom-6 group">
      <div
        id="speed-dial-menu-default"
        className="flex flex-col items-center hidden mb-4 space-y-2"
      >
        <div
          id="tooltip-copy"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Copy
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <Tooltip
        content={t("speedDial.contacts")}
        animation="duration-1000"
        style="light"
      >
        <Button
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <Plus className="transition-transform group-hover:rotate-45" />
          <span className="sr-only">{t("speedDial.contacts")}</span>
        </Button>
      </Tooltip>
    </div>
  );
}
