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
export default JobCard;
