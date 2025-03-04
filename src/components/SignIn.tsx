"use client";

import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const val = await axios.post("http://localhost:5000/users/login", {
        email: data.email,
        password: data.password,
      });
      console.log(val);
      localStorage.setItem("user:token", val.data.data.token);
      localStorage.setItem("user:data", JSON.stringify(val.data.data.user));
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your email address"
            className="mb-6"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            placeholder="Please enter your Password"
            className="mb-14"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <Button className="w-1/2" type="submit">
          Sign in
        </Button>
      </form>
      <div className="pt-2">
        Don&apos;t have an account?
        <span
          className=" text-primary cursor-pointer underline"
          onClick={() => router.push("/sign_up")}
        >
          Sign up
        </span>
      </div>
    </section>
  );
};

export default SignIn;
