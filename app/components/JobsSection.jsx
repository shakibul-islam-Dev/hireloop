import React from "react";

const JobCard = () => (
  <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-semibold text-white mb-3">
        Frontend Developer
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Showcase your commitment to diversity and inclusion by highlighting
        initiatives
      </p>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-[#262626] text-gray-300 px-3 py-1 rounded-full text-xs flex items-center gap-2">
        📍 New York, USA
      </span>
      <span className="bg-[#262626] text-gray-300 px-3 py-1 rounded-full text-xs flex items-center gap-2">
        💼 Hybrid
      </span>
      <span className="bg-[#262626] text-gray-300 px-3 py-1 rounded-full text-xs flex items-center gap-2">
        💰 €25–€40/hour
      </span>
    </div>

    <button className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition-opacity">
      Apply Now →
    </button>
  </div>
);

export default function JobListings() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium tracking-widest text-sm mb-4">
            ■ SMART JOB DISCOVERY ■
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The roles you'd never
            <br />
            find by searching
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(6)].map((_, i) => (
            <JobCard key={i} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors">
            View all job open
          </button>
        </div>
      </div>
    </div>
  );
}
