import React from "react";
import {
  Search,
  TrendingUp,
  Building2,
  Bookmark,
  MousePointerClick,
  FileText,
  Hexagon,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Find your ideal job with advanced filters.",
  },
  {
    icon: TrendingUp,
    title: "Salary Insights",
    desc: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    desc: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    desc: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: MousePointerClick,
    title: "One-Click Apply",
    desc: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    desc: "Create professional resumes with modern templates.",
  },
  {
    icon: Hexagon,
    title: "Skill-Based Matching",
    desc: "Discover jobs that match your skills and experience.",
  },
  {
    icon: BarChart3,
    title: "Career Growth Resources",
    desc: "Boost your career with quick interview tips.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#151516] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium tracking-widest text-sm mb-4">
            ■ FEATURES JOB ■
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1a1a1a] border border-gray-800 rounded-xl flex items-center justify-center text-white">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
