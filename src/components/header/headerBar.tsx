"use client";
import { useSession, useUser } from "@descope/nextjs-sdk/client";
import { HeaderGuestBar } from "./segments/headerGuestBar";
import { HeaderAuthClientBar } from "./segments/headerAuthClientBar";
import { HeaderAuthDeliveryBar } from "./segments/headerAuthDeliveryBar";
export function HeaderBar() {
  const { isAuthenticated } = useSession();
  const { user, isUserLoading } = useUser();
  if (!isAuthenticated || isUserLoading) {
    return <HeaderGuestBar />;
  }
  if (user.customAttributes?.type === "client") {
    return <HeaderAuthClientBar />;
  }
  return <HeaderAuthDeliveryBar />;
}
