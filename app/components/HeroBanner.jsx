import React from "react";
import {
  Briefcase,
  Search,
  MapPin,
  Building,
  UserSearch,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center pt-20 px-6 overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-[200px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center">
        {/* Top Badge */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-1.5 mb-8 text-xs font-medium tracking-wide uppercase">
          <span className="text-orange-500 text-base">💼</span>
          <span>
            <strong className="text-white">50,000+</strong>{" "}
            <span className="text-gray-400">NEW JOBS THIS MONTH</span>
          </span>
        </div>

        {/* Heading & Subtext */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mb-12 text-lg md:text-xl leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-[#15151a] border border-white/10 rounded-full p-2 flex flex-col md:flex-row items-center gap-2 mb-12 shadow-2xl">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
            />
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full">
            <MapPin className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
            />
          </div>
          <button className="bg-[#6366f1] hover:bg-indigo-500 transition-colors py-3 px-8 rounded-full w-full md:w-auto font-semibold">
            Search
          </button>
        </div>

        {/* Stats Section Wrapper */}
        <div className="w-full mt-10">
          <h2 className="text-3xl md:text-4xl text-center text-gray-300 mb-16">
            Assisting over{" "}
            <span className="text-white font-semibold">15,000 job seekers</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <StatCard icon={<Briefcase />} value="50K" label="Active Jobs" />
            <StatCard icon={<Building />} value="12K" label="Companies" />
            <StatCard icon={<UserSearch />} value="2M" label="Job Seekers" />
            <StatCard icon={<Star />} value="97%" label="Satisfaction Rate" />
          </div>
        </div>
      </div>

      {/* Background Globe Image */}
      <div className="absolute top-[20%] w-full max-w-[1200px] z-10 pointer-events-none opacity-40">
        <Image
          src="/globe.png"
          alt="Globe"
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-[#15151a] border border-white/10 p-8 rounded-3xl flex flex-col gap-4 hover:border-indigo-500/50 transition-all duration-300">
      <div className="text-indigo-400">{icon}</div>
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
          {value}
        </h3>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}
