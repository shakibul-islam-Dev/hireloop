"use client";
import { useSession } from "@/lib/auth-client";
import { FileText, Users, Zap, CheckCircle2 } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
const RecruiterPage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (!session) {
    return <div>You are not logged in</div>;
  }
  const user = session?.user;

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-8">
      <h1 className="text-2xl font-semibold text-white mb-8">
        Welcome Back, {user?.name}{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={FileText} label="Total Job Posts" value="48" />
        <StatCard icon={Users} label="Total Applicants" value="1,284" />
        <StatCard icon={Zap} label="Active Jobs" value="18" />
        <StatCard icon={CheckCircle2} label="Jobs Closed" value="32" />
      </div>
    </div>
  );
};

export default RecruiterPage;
