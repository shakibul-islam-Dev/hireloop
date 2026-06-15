import React from "react";

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-[#1a1a1a] border border-[#333] p-6 rounded-xl">
    <div className="mb-4 inline-block p-2 bg-[#262626] rounded-lg">
      <Icon className="w-6 h-6 text-gray-400" />
    </div>
    <p className="text-gray-400 text-sm mb-1">{label}</p>
    <h3 className="text-3xl font-semibold text-white">{value}</h3>
  </div>
);
export default StatCard;
