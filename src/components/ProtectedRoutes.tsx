"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode"

const isTokenExpired = (token: string): boolean => {
  if (!token) return true; 

  try {
    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000; 
    return decoded.exp < currentTime; 
  } catch (error) {
    console.log(error);
    return true; 
  }
};

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("user:token");

    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("user:token"); 
      router.replace("/sign_in");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <>Loading</>;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;