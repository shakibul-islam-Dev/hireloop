import React from "react";
import JobCard from "./jobcard/JobCard";

const JobsSection = () => {
  return (
    <div className="min-h-screen text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white font-medium tracking-widest text-sm mb-4">
            ■ SMART JOB DISCOVERY ■
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The roles you&apos;d never
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
};

export default JobsSection;
