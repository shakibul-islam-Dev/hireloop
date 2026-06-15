"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { useSession } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { label: "Browse Jobs", href: "/browsejobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    // 'fixed' সরিয়ে 'relative' এবং 'w-full' দেওয়া হয়েছে
    <nav className="relative w-full z-50 border-b border-zinc-800 bg-[#121212]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <div className="mx-auto container flex h-20 items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Hire Loop Logo"
              width={140}
              height={40}
              className="h-auto w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-x-8">
          <ul className="flex items-center gap-x-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="h-5 w-[1px] bg-zinc-700" aria-hidden="true" />

          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <h1 className="text-white">Hi {user.name}</h1>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  className="text-sm font-medium text-[#ffffff] hover:bg-red-800 hover:text-[#000000]"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                className="text-sm font-medium text-[#7c3aed] hover:bg-zinc-800/50 hover:text-[#9333ea]"
                asChild
              >
                <Link href="/signin">Sign In</Link>
              </Button>
            )}

            <Button
              className="rounded-xl bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#4f46e5] px-5 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:opacity-90"
              asChild
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-zinc-800 bg-[#121212] md:hidden"
          >
            <div className="space-y-1 px-2 pt-2 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-zinc-800 pt-4 px-3 flex flex-col gap-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-center text-base"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/signin">Sign In</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
