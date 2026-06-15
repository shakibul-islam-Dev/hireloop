import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="dark flex min-h-screen pt-10">
      <DashboardSideBar></DashboardSideBar>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Dashboardlayout;
