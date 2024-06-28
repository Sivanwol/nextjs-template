"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import { User } from "../schema/user";
import { useUserStore } from "../state/providers/user-store-provider";

export default function useUserData() {
  const [userLoading, setUserLoading] = useState(true);
  const [userLoadingError, seUserLoadingError] = useState(false);
  const { users, updateUsers } = useUserStore((state) => state);
  useEffect(() => {
    const fetchData = async () => {
      if (userLoading) {
        const res = await axios.get("https://randomuser.me/api?results=10");
        const users = res.data.results.map((user: any) => {
          const result: User = user as User;
          const { uuid, username } = user.login;
          result.id = uuid;
          result.username = username;
          return result;
        });
        updateUsers(users);
        setUserLoading(false);
      }
    };

    const result = fetchData()
      // make sure to catch any error
      .catch((err) => {
        console.error(err)
        setUserLoading(false);
        seUserLoadingError(true);
      });
  }, [users, updateUsers, userLoading, setUserLoading, seUserLoadingError]);
}
