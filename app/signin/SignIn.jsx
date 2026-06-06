"use client";
import React, { useState } from "react";
import { Input, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          alert("Account created successfully!");
        },
        onError: (ctx) => {
          alert(ctx.error.message); // এটা দেখলে বুঝতে পারব সমস্যা কোথায়
        },
      },
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
          <p className="text-slate-400">Join our community today</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
          <Input
            label="Full Name"
            placeholder="Enter your name"
            variant="bordered"
            color="primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
            color="primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Create a password"
            variant="bordered"
            color="primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full mt-2 font-semibold"
            color="primary"
            size="lg"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-primary hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
