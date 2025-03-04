"use client";

import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import { tokenProvider } from "../actions/stream.actions";
import Loader from "@/components/Loader";

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const userDetails = localStorage.getItem("user:data") as string;
const userData = JSON.parse(userDetails);
const userId = userData.id;
const userName = userData.userName.firstName;

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  if (!API_KEY) throw new Error("Stream API key is missing");

  useEffect(() => {
    if (!userId || !userName) return;
    if (!API_KEY) throw new Error("Stream API key is missing");
    const tokenPrv = () => tokenProvider({ userId });
    if (!tokenPrv) throw new Error("Looks like something went wrong.");
    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: userId,
        name: userName || userId,
      },
      tokenProvider: tokenPrv,
    });

    setVideoClient(client);
  }, []);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};
