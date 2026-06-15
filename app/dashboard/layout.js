import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="dark h-full pt-10">
      <DashboardSideBar></DashboardSideBar>
      {children}
    </div>
  );
};

export default Dashboardlayout;
