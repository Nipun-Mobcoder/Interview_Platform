import ProtectedRoutes from "@/components/ProtectedRoutes";
import React from "react";
import { StreamVideoProvider } from "../../../providers/StreamClientProvider";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <ProtectedRoutes>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </ProtectedRoutes>
    </main>
  );
};

export default RootLayout;
