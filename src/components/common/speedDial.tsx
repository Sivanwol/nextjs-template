import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import { useTranslations } from "next-intl";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import WhatsupDialerItem from "./dialer/whatsup";
import LinkedinDialerItem from "./dialer/linkedin";
import GithubDialerItem from "./dialer/github";
import EmailDialerItem from "./dialer/email";

export default function SpeedDialComponent() {
  const t = useTranslations("common");
  const actions = [
    // { icon: <FacebookIcon />, name: t("speedDial.facebook"), href:"" },
    {
      icon: <LinkedinDialerItem />,
      name: t("speedDial.linkedin"),
    },
    {
      icon: <WhatsupDialerItem />,
      name: t("speedDial.whatsup"),
    },
    {
      icon: <GithubDialerItem />,
      name: t("speedDial.github"),
    },
    {
      icon: <EmailDialerItem />,
      name: t("speedDial.email"),
    },
  ];
  const onOpen = (action: {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    name: string;
    href: string;
  }) => {};
  return (
    <SpeedDial
      ariaLabel={t("speedDial.contacts")}
      className="transition-opacity ease-in duration-700 opacity-100"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          icon={action.icon}
          key={action.name}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
