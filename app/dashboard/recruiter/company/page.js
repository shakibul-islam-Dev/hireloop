"use client";
import { Plus, MapPin, Users, Globe, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import RegisterCompanyModal from "@/components/dashboard/RegisterCompanyModal";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);

  // নতুন কোম্পানি যোগ করা বা আপডেট করার ফাংশন
  const handleSaveCompany = (companyData) => {
    if (editingCompany) {
      // এডিট মোড: বিদ্যমান কোম্পানি আপডেট
      setCompanies(
        companies.map((c) =>
          c.id === editingCompany.id ? { ...companyData, id: c.id } : c,
        ),
      );
    } else {
      // নতুন কোম্পানি যোগ
      setCompanies([...companies, { ...companyData, id: Date.now() }]);
    }
    setEditingCompany(null);
    setIsOpen(false);
  };

  const startEdit = (company) => {
    setEditingCompany(company);
    setIsOpen(true);
  };

  const deleteCompany = (id) => {
    setCompanies(companies.filter((c) => c.id !== id));
  };

  return (
    <div className="p-8 bg-[#121212] min-h-screen text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">My Company</h1>
          <p className="text-gray-400">Manage your registered companies.</p>
        </div>
        <button
          onClick={() => {
            setEditingCompany(null);
            setIsOpen(true);
          }}
          className="bg-white text-black px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-200 transition"
        >
          <Plus size={18} /> Register a company
        </button>
      </div>

      {companies.length === 0 ? (
        <div className="bg-[#1a1a1a] border border-[#262626] rounded-2xl p-10 text-center">
          <p className="text-gray-400 mb-6">
            You haven&apos;t registered any company yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{company.name}</h3>
                  <p className="text-gray-400 text-sm">{company.industry}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(company)}
                    className="text-blue-400"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => deleteCompany(company.id)}
                    className="text-red-400"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">{company.desc}</p>
              <div className="border-t border-gray-800 pt-4 space-y-3">
                <div className="flex justify-between text-gray-500 text-xs">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> {company.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} /> {company.size}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <RegisterCompanyModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditingCompany(null);
        }}
        onSuccess={handleSaveCompany}
        initialData={editingCompany} // মোডালকে এডিট ডাটা পাঠানো
      />
    </div>
  );
}
