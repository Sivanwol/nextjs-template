import React from "react";
import { UserProvider } from "@app/lib/state/providers/user-store-provider";

const Providers = async ({
  children,
}: Readonly<{
  children: any;
}>) => {
  return (
    <UserProvider>{children}</UserProvider>
  );
};

export default Providers;
