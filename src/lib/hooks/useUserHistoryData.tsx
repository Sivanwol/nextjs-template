"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import { User } from "../requests/user";
import { useUserStore } from "../state/providers/user-store-provider";

export default function useUserHistoryData() {
  const [userHistoryLoading, setUserHistoryLoading] = useState(true);
  const [userHistoryLoadingError, seUserHistoryLoadingError] = useState(false);
  const { updateUsersHistory } = useUserStore((state) => state);
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData");
      if (userHistoryLoading) {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/history`,
        );
        updateUsersHistory(res.data.users);
        setUserHistoryLoading(false);
      }
    };

    const result = fetchData()
      // make sure to catch any error
      .catch((err) => {
        console.error(err);
        setUserHistoryLoading(false);
        seUserHistoryLoadingError(true);
      });
  }, [userHistoryLoading, updateUsersHistory]);
}
