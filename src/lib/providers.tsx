import React from "react";
import { AuthProvider } from "@descope/nextjs-sdk";
import getHypertune from "@app/lib/getHypertune";
import { UserProvider } from "@app/lib/state/providers/user-store-provider";

import { HypertuneProvider } from "@gen/hypertune.react";
const Providers = async ({
  children,
}: Readonly<{
  children: any;
}>) => {
  if (process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID === undefined) {
    throw new Error("NEXT_PUBLIC_DESCOPE_PROJECT_ID is not defined");
  }
  const hypertune = await getHypertune();
  const serverDehydratedState = hypertune.dehydrate();
  const serverRootArgs = hypertune.getRootArgs();

  return (
    <HypertuneProvider
      createSourceOptions={{
        token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN!,
      }}
      dehydratedState={serverDehydratedState}
      rootArgs={serverRootArgs}
    >
      <UserProvider>
        <AuthProvider projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID}>
          {children}
        </AuthProvider>
      </UserProvider>
    </HypertuneProvider>
  );
};

export default Providers;
