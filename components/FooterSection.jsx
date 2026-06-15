"use client";
import React from "react";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";

const FooterSection = () => {
  return (
    // 'sticky top-[100vh]' ব্যবহার করা হয়েছে যাতে কন্টেন্ট কম থাকলেও এটি নিচে থাকে
    <footer className="sticky top-[100vh] bg-black text-gray-400 py-16 px-6 border-t border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Logo and Tagline */}
        <div className="lg:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4 flex items-center">
            hire<span className="text-orange-500">loop</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xs mb-8">
            The AI-native career platform. Built for people who take their work
            seriously.
          </p>
          <div className="flex gap-3">
            <button className="p-2 bg-[#1a1a1a] rounded-lg hover:bg-gray-800 transition text-white">
              <FaFacebook size={20} />
            </button>
            <button className="p-2 bg-purple-900 rounded-lg hover:bg-purple-800 transition text-white">
              <FaPinterest size={20} />
            </button>
            <button className="p-2 bg-[#1a1a1a] rounded-lg hover:bg-gray-800 transition text-white">
              <FaLinkedin size={20} />
            </button>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Product</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Job discovery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Worker AI
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Salary data
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Navigations</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Career library
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Brand Guideline
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Newsroom
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between text-xs gap-4">
        <p>© Copyright 2026 — Programming Hero</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Terms & Policy
          </a>
          <a href="#" className="hover:text-white">
            Privacy Guideline
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
