"use server";

import { StreamClient } from "@stream-io/node-sdk";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = process.env.SECRET_SECRET_KEY;

export const tokenProvider = async ({userId}: {userId: string}) => {
  if (!userId) throw new Error("User is not authenticated");
  if (!STREAM_API_KEY) throw new Error("Stream API key secret is missing");
  if (!STREAM_API_SECRET) throw new Error("Stream API secret is missing");

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  const vailidity = 60 * 60;

  const token = streamClient.generateUserToken({
    user_id: userId,
    validity_in_seconds: vailidity,
  });

  return token;
};
