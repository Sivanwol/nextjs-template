import React from "react";
import getHypertune from "@app/lib/getHypertune";
import { UserProvider } from "@app/lib/state/providers/user-store-provider";

import { HypertuneProvider } from "@gen/hypertune.react";
const Providers = async ({
  children,
}: Readonly<{
  children: any;
}>) => {
  const hypertune = await getHypertune();
  const serverDehydratedState = hypertune.dehydrate();
  const serverRootArgs = hypertune.getRootArgs();

  return (
    // <HypertuneProvider
    //   createSourceOptions={{
    //     token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN!,
    //   }}
    //   dehydratedState={serverDehydratedState}
    //   rootArgs={serverRootArgs}
    // >
    <UserProvider>{children}</UserProvider>
    // </HypertuneProvider>
  );
};

export default Providers;
