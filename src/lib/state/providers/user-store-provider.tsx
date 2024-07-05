"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import { devtools } from "zustand/middleware";
import { UserStore, createUserStore } from "../user";

export type UserStoreApi = ReturnType<typeof createUserStore>;
export const UserStoreContext = createContext<UserStoreApi | undefined>(
  undefined,
);

export interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const storeRef = useRef<UserStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUserStore();
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};
export const useUserStore = <T,>(selector: (store: UserStore) => T): T => {
  const userStoreContext = useContext(UserStoreContext);
  if (!userStoreContext) {
    throw new Error("useUserStore must be used within a UserProvider");
  }
  return useStore(userStoreContext, selector);
};
