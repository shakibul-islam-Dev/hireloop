"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        callbackURL: "/",
      });

      if (error) {
        console.log(error.message || "Something went wrong");
        setIsLoading(false);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      console.log("An unexpected error occurred");
      setIsLoading(false);
    }
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
            name="name"
            label="Full Name"
            placeholder="Enter your name"
            variant="bordered"
            color="primary"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
            color="primary"
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            variant="bordered"
            color="primary"
          />
          <Button
            type="submit"
            className="w-full mt-2 font-semibold"
            color="primary"
            size="lg"
            isLoading={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
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
