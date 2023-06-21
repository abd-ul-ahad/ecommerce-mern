"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/UserSlice";
import type { User } from "@/store/slices/UserSlice";

interface Payload {
  firstName?: string;
  lastName?: string;
  email?: string;
  confirmPassword?: String;
  password?: string;
}

const Login = () => {
  const dispatch = useDispatch();

  const [payload, setPayload] = useState<Payload>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (data.done) {
      setPayload({});
      const i: User = {
        firstName: data.instance.firstName,
        lastName: data.instance.lastName,
        email: data.instance.email,
        token: data.instance.token,
      };

      dispatch(login(i));

      console.log(data);

      localStorage.setItem("__token_", data.instance.token);
    }
    setLoading(false);
    console.log(data);
  };

  return (
    <div className="bg-[var(--light-pink)] flex justify-center items-center py-16">
      <div className="flex justify-evenly w-full items-start">
        {/* login */}
        <div>
          <h1 className="font-bold text-2xl mb-10">LOGIN</h1>
          <div className="space-y-6 flex flex-col justify-center items-center">
            <div className="space-y-2">
              <p className="text-sm tracking-widest">
                Incorrect email or password.
              </p>
              <p className="tracking-widest font-semibold text-sm">EMAIL</p>
              <input
                className="px-4 py-2 text-lg focus:outline-1 focus:outline-[black]"
                type="email"
                name="email"
                value={payload.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <p className="tracking-widest font-semibold text-sm">PASSWORD</p>
              <input
                className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                type="password"
                name="password"
                value={payload.password || ""}
                onChange={handleChange}
              />
            </div>
            <div className="justify-center items-center flex flex-col space-y-3">
              <button
                className="bg-[var(--dark)] text-[white] text-sm font-bold tracking-widest py-3 px-28 hover:bg-[white] hover:text-[var(--dark)] group-hover:block"
                onClick={handleLogin}
              >
                Login
              </button>
              <Link href="/">
                <p className="underline text-xs font-semibold">
                  FORGET PASSWORD
                </p>
              </Link>
              <Link href="/register">
                <p className="underline text-xs font-semibold">REGISTER</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
