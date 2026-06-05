"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Browse Jobs", href: "/browsejobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="fixed   top-0 left-0 right-0 z-50 rounded-lg border-zinc-800 bg-[#121212]/90 backdrop-blur-md  px-4 sm:px-6 lg:px-8">
      <div className="mx-auto container mx-auto flex h-20 items-center justify-between">
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

        {/* Center/Right Section: Desktop Navigation & Actions */}
        <div className="hidden md:flex md:items-center md:gap-x-8">
          {/* Middle Links */}
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

          {/* Visual Separator from Figma */}
          <span className="h-5 w-[1px] bg-zinc-700" aria-hidden="true" />

          {/* Action Buttons */}
          <div className="flex items-center gap-x-4">
            <Button
              variant="ghost"
              className="text-sm font-medium text-[#7c3aed] hover:bg-zinc-800/50 hover:text-[#9333ea]"
              asChild
            >
              <Link href="/signin">Sign In</Link>
            </Button>

            <Button
              className="rounded-xl bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#4f46e5] px-5 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-[#7c3aed]/20"
              asChild
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile & Tablet Animated Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t border-zinc-800 bg-[#121212] md:hidden"
          >
            <div className="space-y-1 px-2 pt-2 pb-4 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-base font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 border-t border-zinc-800 pt-4 px-3 flex flex-col gap-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-center text-base font-medium text-[#7c3aed] hover:bg-zinc-800"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/signin">Sign In</Link>
                </Button>

                <Button
                  className="w-full justify-center rounded-xl bg-gradient-to-r from-[#6366f1] to-[#7c3aed] text-base font-medium text-white"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/get-started">Get Started</Link>
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
