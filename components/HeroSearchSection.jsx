import { Input, Button } from "@heroui/react";
import { Search, MapPin, Briefcase } from "lucide-react";

export default function HeroSearchSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-black text-white">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 mt-10 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
        <Briefcase className="w-4 h-4 text-orange-400" />
        <span className="text-xs font-mono uppercase tracking-widest text-white/80">
          50,000+ New Jobs This Month
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        Find Your Dream Job Today
      </h1>
      <p className="text-white/60 text-lg mb-10 max-w-lg text-center">
        HireLoop connects top talent with world-class companies. Browse
        thousands of curated opportunities and land your next role — faster.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-full p-2 flex items-center gap-2 shadow-xl backdrop-blur-md">
        {/* Job Search Input Group */}
        <div className="flex items-center flex-1 px-4">
          <Search className="text-white/50 w-5 h-5 mr-2 shrink-0" />
          <Input
            placeholder="Job title, skill or company"
            className="bg-transparent"
            classnames={{
              input: "bg-transparent text-white",
              inputWrapper:
                "bg-transparent border-none shadow-none group-data-[focus=true]:bg-transparent data-[hover=true]:bg-transparent",
            }}
          />
        </div>

        <div className="w-px h-8 bg-white/10 shrink-0" />

        {/* Location Search Input Group */}
        <div className="flex items-center flex-1 px-4">
          <MapPin className="text-white/50 w-5 h-5 mr-2 shrink-0" />
          <Input
            placeholder="Location or Remote"
            className="bg-transparent"
            classnames={{
              input: "bg-transparent text-white",
              inputWrapper:
                "bg-transparent border-none shadow-none group-data-[focus=true]:bg-transparent data-[hover=true]:bg-transparent",
            }}
          />
        </div>

        <Button
          isIconOnly
          className="bg-blue-600 rounded-full text-white w-12 h-12 shrink-0"
        >
          <Search />
        </Button>
      </div>

      {/* Trending Positions */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <span className="text-white/50 text-sm">Trending Position</span>
        <div className="flex gap-2">
          {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map(
            (tag) => (
              <button
                key={tag}
                className="px-4 py-1.5 rounded-full border border-white/10 hover:bg-white/10 text-sm transition-all"
              >
                {tag}
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
