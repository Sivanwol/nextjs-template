"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import { User } from "../requests/user";
import { useUserStore } from "../state/providers/user-store-provider";
export type useUserProfileProps = {
  id: string;
};

export default function useUserProfile({ ...props }: useUserProfileProps) {
  const [userProfileLoading, setUserProfileLoading] = useState(true);
  const [userProfileLoadingError, seUserProfileLoadingError] = useState(false);
  const { profile, setProfile } = useUserStore((state) => state);
  useEffect(() => {
    const fetchData = async () => {
      if (userProfileLoading && profile === null) {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${props.id}`,
        );
        setProfile(res.data.user);
        setUserProfileLoading(false);
      }
    };
    const result = fetchData()
      // make sure to catch any error
      .catch((err) => {
        console.error(err);
        setUserProfileLoading(false);
        seUserProfileLoadingError(true);
      });
  }, [
    props,
    profile,
    setProfile,
    userProfileLoading,
    setUserProfileLoading,
    seUserProfileLoadingError,
  ]);
}
