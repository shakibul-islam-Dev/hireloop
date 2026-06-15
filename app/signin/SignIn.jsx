"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"; // shadcn path
import { Button } from "@/components/ui/button"; // shadcn path
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        console.log(error.message || "Something went wrong");
        setIsLoading(false);
      } else {
        router.replace("/");
        router.refresh();
      }
    } catch (err) {
      console.log("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0c14] p-4">
      <div className="w-full max-w-sm bg-[#11131c] border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
          <p className="text-slate-400 text-sm">Welcome back to your account</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-transparent border-slate-700 text-white placeholder:text-slate-600 h-12"
          />

          <div className="relative w-full">
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent border-slate-700 text-white placeholder:text-slate-600 h-12 pr-12"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white font-medium mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
