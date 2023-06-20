"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Payload {
  firstName?: string;
  lastName?: string;
  email?: string;
  confirmPassword?: String;
  password?: string;
}

const Login = () => {
  const [payload, setPayload] = useState<Payload>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8080/api/auth/register", {
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
    }
    setLoading(false);
    console.log(data);
  };

  return (
    <div className="bg-[var(--light-pink)] flex justify-center items-center py-16">
      <div className="flex justify-evenly w-full items-start">
        <div>
          <div>
            <h1 className="font-bold text-2xl mb-10">SIGN UP</h1>

            <div className="space-y-6 flex flex-col justify-start items-center">
              <div className="space-y-2">
                <p className="text-sm tracking-widest mb-7">
                  We never save credit card information.
                </p>
                <p className="text-sm tracking-widest w-1/2">
                  Registering makes checkout fast and easy and saves your order
                  information in your account.
                </p>
                <p className="text-sm tracking-widest">
                  Incorrect email or password.
                </p>
                <p className="tracking-widest font-semibold text-sm">
                  FIRST NAME
                </p>
                <input
                  onChange={handleChange}
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="text"
                  name="firstName"
                  value={payload.firstName || ""}
                />
                <p className="tracking-widest font-semibold text-sm">
                  LAST NAME
                </p>
                <input
                  onChange={handleChange}
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="text"
                  name="lastName"
                  value={payload.lastName || ""}
                />
                <p className="tracking-widest font-semibold text-sm">EMAIL</p>
                <input
                  onChange={handleChange}
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="email"
                  name="email"
                  value={payload.email || ""}
                />
                <p className="tracking-widest font-semibold text-sm">
                  CONFIRM PASSWORD
                </p>
                <input
                  onChange={handleChange}
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="password"
                  name="confirmPassword"
                />
                <p className="tracking-widest font-semibold text-sm">
                  PASSWORD
                </p>
                <input
                  onChange={handleChange}
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="password"
                  name="password"
                  value={payload.password || ""}
                />
              </div>
              <div className="justify-start w-full items-start flex flex-col space-y-3">
                <button
                  className={`bg-[var(--dark)] text-[white] text-sm font-bold tracking-widest py-3 px-28 hover:bg-[white] hover:text-[var(--dark)] group-hover:block`}
                  onClick={handleRegister}
                >
                  {loading ? "Loading..." : "SIGN UP"}
                </button>
                <p className="text-xs w-1/2 font-semibold">
                  By creating an account, you agree to our{" "}
                  <span className="underline"> Terms of Use</span> and
                  <span className="underline">Privacy Policy </span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
