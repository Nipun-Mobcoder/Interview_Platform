import Loader from "@/components/Loader";
import MeetingPage from "@/components/MeetingPage";
import React from "react";

const Meeting = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) return <Loader />;
  return <MeetingPage id={id} />;
};

export default Meeting;
