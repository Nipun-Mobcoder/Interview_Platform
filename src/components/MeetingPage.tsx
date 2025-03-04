"use client";

import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useGetCallById } from "../../hooks/UseGetCallById";
import { useState } from "react";

const MeetingPage = ({ id }: { id: string }) => {
  const userDetails = localStorage.getItem("user:data") as string;
  const user = JSON.parse(userDetails);
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  return (
    <main className="h-screen w-full">
      <StreamCall>
        <StreamTheme>
            {!isSetupComplete ? (
                'Meeting Setup'
            ): ('Meeting Room')}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
