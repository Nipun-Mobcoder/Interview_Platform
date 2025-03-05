"use client";

import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useGetCallById } from "../../hooks/UseGetCallById";
import { useState } from "react";
import MeetingSetup from "./MeetingSetup";
import MeetingRoom from "./MeetingRoom";
import Loader from "./Loader";

const MeetingPage = ({ id }: { id: string }) => {
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
