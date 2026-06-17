"use client";
import React, { useState, useEffect } from "react";
import { X, MapPin, Upload } from "lucide-react";

export default function RegisterCompanyModal({
  isOpen,
  onClose,
  onSuccess,
  initialData,
}) {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "Technology",
    websiteUrl: "",
    location: "",
    employeeRange: "1-10 employees",
    description: "",
    logo: null,
  });

  // যদি initialData থাকে (এডিট মোড), তবে ফর্ম ডাটা সেট করা
  useEffect(() => {
    if (initialData) {
      setFormData({
        companyName: initialData.name || "",
        industry: initialData.industry || "Technology",
        websiteUrl: initialData.websiteUrl || "",
        location: initialData.location || "",
        employeeRange: initialData.size || "1-10 employees",
        description: initialData.desc || "",
        logo: null, // ফাইল ইনপুট সাধারণত আগের ফাইলটি দেখায় না
      });
    } else {
      // মোডাল ক্লোজ হলে ফর্ম রিসেট করা
      setFormData({
        companyName: "",
        industry: "Technology",
        websiteUrl: "",
        location: "",
        employeeRange: "1-10 employees",
        description: "",
        logo: null,
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, logo: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyData = {
      name: formData.companyName,
      industry: formData.industry,
      websiteUrl: formData.websiteUrl,
      location: formData.location,
      size: formData.employeeRange,
      desc: formData.description,
      logo: formData.logo,
      status: initialData ? initialData.status : "PENDING",
    };

    if (onSuccess) {
      onSuccess(companyData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#141414] border border-[#262626] rounded-xl max-w-2xl w-full text-white shadow-2xl">
        <div className="p-6 border-b border-[#212121] flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">
              {initialData ? "Edit Company" : "Register New Company"}
            </h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-5">
            {/* Input fields as before, but with value={formData.key} */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                placeholder="Company Name"
                className="w-full bg-[#1a1a1a] border border-[#262626] rounded-lg p-3 text-sm"
              />
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full bg-[#1a1a1a] border border-[#262626] rounded-lg p-3 text-sm"
              >
                <option>Technology</option>
                <option>Fintech</option>
                <option>AI & Machine Learning</option>
              </select>
            </div>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Description"
              className="w-full bg-[#1a1a1a] border border-[#262626] rounded-lg p-3 text-sm"
            />

            <label className="flex items-center gap-3 bg-[#1a1a1a] border border-dashed border-[#333333] rounded-lg p-3 cursor-pointer">
              <Upload size={16} />
              <span>{formData.logo ? formData.logo.name : "Upload Logo"}</span>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="p-4 border-t border-[#212121] flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-[#262626]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-black px-5 py-2.5 rounded-lg font-bold"
            >
              {initialData ? "Update Company" : "Register Company"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
