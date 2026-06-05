"use client";
import React, { useState } from "react";

// Pricing Card Component
const PricingCard = ({ title, price, features, highlighted }) => (
  <div
    className={`p-8 rounded-3xl border ${
      highlighted
        ? "border-purple-500 bg-[#141414]"
        : "border-gray-800 bg-[#1a1a1a]"
    }`}
  >
    <h3 className="text-xl font-semibold mb-6">{title}</h3>
    <div className="text-4xl font-bold mb-8">
      ${price}
      <span className="text-sm font-normal text-gray-400">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
          <span className="text-purple-500 font-bold">+</span> {f}
        </li>
      ))}
    </ul>
    <button className="w-full py-3 px-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition">
      Choose This Plan →
    </button>
  </div>
);

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="bg-black w-full text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-32">
        <p className="text-purple-500 font-medium tracking-[0.2em] text-sm mb-4">
          ■ PRICING ■
        </p>
        <h2 className="text-5xl font-bold mb-8">
          Pay for the leverage,
          <br />
          not the listings
        </h2>

        <div className="inline-flex p-1 bg-[#1a1a1a] rounded-full mb-16 border border-gray-800">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full transition-all ${
              billing === "monthly"
                ? "bg-white text-black font-semibold"
                : "text-gray-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-white text-black font-semibold"
                : "text-gray-400"
            }`}
          >
            Yearly
            <span className="bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              25%
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <PricingCard
            title="Starter"
            price="0"
            features={[
              "Daily AI match brief",
              "Verified salary bands",
              "Company insight",
              "1-click apply",
            ]}
          />
          <PricingCard
            title="Growth"
            price="17"
            features={[
              "Daily AI match brief",
              "Verified salary bands",
              "Company insight",
              "1-click apply",
            ]}
            highlighted
          />
          <PricingCard
            title="Premium"
            price="99"
            features={[
              "Everything in Pro",
              "Multi-profile",
              "Shared talent rooms",
              "Recruiter view",
            ]}
          />
        </div>
      </div>

      {/* CTA Section */}
    </div>
  );
}
