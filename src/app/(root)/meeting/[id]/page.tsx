import { LoaderPinwheel } from "lucide-react";
import React from "react";

const Meeting = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);
  if (!id) return <LoaderPinwheel />;
  return <div>Meeting {id}</div>;
};

export default Meeting;
